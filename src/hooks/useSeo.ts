import { useEffect } from 'react';
import { Language } from '../contexts/LanguageContext';

const HTML_LANG: Record<Language, string> = { ge: 'ka', ru: 'ru', en: 'en' };

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
}: SeoOptions) {
  useEffect(() => {
    const undo: Restore[] = [];
    const previousTitle = document.title;
    const previousLang = document.documentElement.lang;

    document.title = title;
    document.documentElement.lang = HTML_LANG[language];

    setMeta(undo, 'meta[name="description"]', 'name', 'description', description);
    if (keywords) setMeta(undo, 'meta[name="keywords"]', 'name', 'keywords', keywords);

    setMeta(undo, 'meta[property="og:type"]', 'property', 'og:type', 'article');
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

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLang;
      for (const restore of undo.reverse()) restore();
    };
  }, [language, title, description, keywords, ogTitle, ogDescription, ogImage, ogImageAlt, canonicalPath]);
}
