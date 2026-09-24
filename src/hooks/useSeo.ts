import { useEffect } from 'react';
import { Language } from '../contexts/LanguageContext';

/** BCP-47 codes; Georgian is published as ka-GE, as the client asked. */
const HTML_LANG: Record<Language, string> = { ge: 'ka-GE', ru: 'ru', en: 'en' };

interface SeoOptions {
  language: Language;
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  /** Same page in the other languages, for hreflang + og:locale:alternate. */
  alternates?: Partial<Record<Language, string>>;
  /** hreflang="x-default" target; defaults to the canonical path. */
  defaultAlternate?: string;
  /** JSON-LD injected as <script type="application/ld+json">. */
  structuredData?: Record<string, unknown>;
  /** Explicit robots directive; omitted tags mean "index, follow". */
  robots?: string;
}

/** Undo functions collected while the tags are written, run on unmount. */
type Restore = () => void;

function setMeta(
  undo: Restore[],
  selector: string,
  attr: 'name' | 'property',
  key: string,
  content: string
) {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);
  if (existing) {
    const previous = existing.getAttribute('content') || '';
    undo.push(() => existing.setAttribute('content', previous));
    existing.setAttribute('content', content);
    return;
  }
  const el = document.createElement('meta');
  el.setAttribute(attr, key);
  el.setAttribute('content', content);
  document.head.appendChild(el);
  undo.push(() => el.remove());
}

/** Adds a tag that may legitimately appear many times (hreflang, locales). */
function addTag(undo: Restore[], el: HTMLElement) {
  document.head.appendChild(el);
  undo.push(() => el.remove());
}

function setLink(undo: Restore[], rel: string, href: string) {
  const existing = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (existing) {
    const previous = existing.getAttribute('href') || '';
    undo.push(() => existing.setAttribute('href', previous));
    existing.setAttribute('href', href);
    return;
  }
  const el = document.createElement('link');
  el.setAttribute('rel', rel);
  el.setAttribute('href', href);
  document.head.appendChild(el);
  undo.push(() => el.remove());
}

/**
 * Sets per-page, per-language SEO tags. The site is a SPA with a single
 * index.html, so the tags are written into <head> on mount and whenever the
 * visitor switches language.
 */
export function useSeo({
  language,
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  canonicalPath,
  ogType = 'article',
  alternates,
  defaultAlternate,
  structuredData,
  robots,
}: SeoOptions) {
  useEffect(() => {
    const undo: Restore[] = [];
    const previousTitle = document.title;
    const previousLang = document.documentElement.lang;

    document.title = title;
    document.documentElement.lang = HTML_LANG[language];

    setMeta(undo, 'meta[name="description"]', 'name', 'description', description);
    if (keywords) setMeta(undo, 'meta[name="keywords"]', 'name', 'keywords', keywords);

    setMeta(undo, 'meta[property="og:type"]', 'property', 'og:type', ogType);
    setMeta(undo, 'meta[property="og:title"]', 'property', 'og:title', ogTitle || title);
    setMeta(undo, 'meta[property="og:description"]', 'property', 'og:description', ogDescription || description);
    setMeta(undo, 'meta[property="og:locale"]', 'property', 'og:locale', HTML_LANG[language]);

    setMeta(undo, 'meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta(undo, 'meta[name="twitter:title"]', 'name', 'twitter:title', ogTitle || title);
    setMeta(undo, 'meta[name="twitter:description"]', 'name', 'twitter:description', ogDescription || description);

    const origin = typeof window !== 'undefined' ? window.location.origin : '';

    if (ogImage) {
      const absolute = ogImage.startsWith('http') ? ogImage : `${origin}${ogImage}`;
      setMeta(undo, 'meta[property="og:image"]', 'property', 'og:image', absolute);
      setMeta(undo, 'meta[name="twitter:image"]', 'name', 'twitter:image', absolute);
      if (ogImageAlt) {
        setMeta(undo, 'meta[property="og:image:alt"]', 'property', 'og:image:alt', ogImageAlt);
      }
    }

    if (canonicalPath) {
      const url = `${origin}${canonicalPath}`;
      setLink(undo, 'canonical', url);
      setMeta(undo, 'meta[property="og:url"]', 'property', 'og:url', url);
    }

    if (robots) {
      setMeta(undo, 'meta[name="robots"]', 'name', 'robots', robots);
    }

    if (alternates) {
      for (const [lang, path] of Object.entries(alternates) as [Language, string][]) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', HTML_LANG[lang]);
        link.setAttribute('href', `${origin}${path}`);
        addTag(undo, link);

        if (lang !== language) {
          const locale = document.createElement('meta');
          locale.setAttribute('property', 'og:locale:alternate');
          locale.setAttribute('content', HTML_LANG[lang]);
          addTag(undo, locale);
        }
      }

      const xDefault = document.createElement('link');
      xDefault.setAttribute('rel', 'alternate');
      xDefault.setAttribute('hreflang', 'x-default');
      xDefault.setAttribute('href', `${origin}${defaultAlternate || canonicalPath || '/'}`);
      addTag(undo, xDefault);
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      addTag(undo, script);
    }

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLang;
      for (const restore of undo.reverse()) restore();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    language,
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogImageAlt,
    canonicalPath,
    ogType,
    robots,
    defaultAlternate,
    JSON.stringify(alternates),
    JSON.stringify(structuredData),
  ]);
}
