import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import YouTubeBanner from '../components/YouTubeBanner';
import FloatingButtons from '../components/FloatingButtons';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useForbesTranslations, FORBES_ARTICLE, FORBES_PATHS } from '../translations/forbes';
import { useSeo } from '../hooks/useSeo';

const NAVY = '#00265E';
const FORBES_BLUE = '#0d2b56';

/** <picture> with a WebP source and a JPEG fallback for older browsers. */
function Picture({
  base,
  alt,
  width,
  height,
  className,
  style,
  priority,
}: {
  base: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}) {
  return (
    <picture>
      <source srcSet={`${base}.webp`} type="image/webp" />
      <img
        src={`${base}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
        style={{ display: 'block', width: '100%', height: 'auto', ...style }}
      />
    </picture>
  );
}

/**
 * The Forbes Georgia feature, published at its own URL per language so each
 * version can carry its own canonical and the three can point at each other
 * with hreflang. `pageLanguage` comes from the route, and the site's language
 * switcher follows it.
 */
export default function ForbesPage({ pageLanguage }: { pageLanguage: Language }) {
  const { language, setLanguage } = useLanguage();

  // Opening a language-specific URL switches the whole site to that language.
  useEffect(() => {
    if (language !== pageLanguage) setLanguage(pageLanguage);
  }, [pageLanguage, language, setLanguage]);

  const t = useForbesTranslations(pageLanguage);
  const canonical = FORBES_PATHS[pageLanguage];
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://mago.ge';

  useSeo({
    language: pageLanguage,
    title: t.seoTitle,
    description: t.seoDescription,
    keywords: t.seoKeywords,
    ogTitle: t.ogTitle,
    ogDescription: t.ogDescription,
    ogImage: `/forbes/og-forbes-${pageLanguage === 'ge' ? 'ka' : pageLanguage}.jpg`,
    ogImageAlt: t.imageAlt,
    canonicalPath: canonical,
    ogType: 'article',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    alternates: FORBES_PATHS,
    defaultAlternate: FORBES_PATHS.en,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: t.h1,
      description: t.seoDescription,
      inLanguage: pageLanguage === 'ge' ? 'ka-GE' : pageLanguage,
      image: [`${origin}/forbes/og-forbes-${pageLanguage === 'ge' ? 'ka' : pageLanguage}.jpg`],
      datePublished: FORBES_ARTICLE.publishedIso,
      dateModified: FORBES_ARTICLE.publishedIso,
      author: { '@type': 'Person', name: FORBES_ARTICLE.author },
      publisher: { '@type': 'Organization', name: FORBES_ARTICLE.publisher },
      isBasedOn: FORBES_ARTICLE.url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${origin}${canonical}` },
      about: {
        '@type': 'MedicalBusiness',
        name: 'New Technologies – MaGo',
        url: origin,
        founder: { '@type': 'Person', name: 'Maka Gogiashvili' },
      },
    },
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Navigation />
      <FloatingButtons />

      {/* ───── HERO ───── */}
      <div style={{ backgroundColor: FORBES_BLUE, color: '#fff', padding: '38px 20px 42px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <img
            src={`${FORBES_ARTICLE.logo}.png`}
            alt={t.logoAlt}
            width={260}
            height={66}
            style={{ display: 'block', width: '210px', height: 'auto', marginBottom: '20px' }}
          />

          <h1
            style={{
              fontSize: 'clamp(1.45rem, 3.8vw, 2.2rem)',
              fontWeight: 800,
              lineHeight: 1.35,
              margin: '0 0 14px',
            }}
          >
            {t.h1}
          </h1>

          <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.85, lineHeight: 1.7 }}>
            {t.authorLabel} <strong>{FORBES_ARTICLE.author}</strong> · {t.publishedLabel}{' '}
            <time dateTime={FORBES_ARTICLE.publishedIso}>{t.publishedDate}</time>
          </p>
        </div>
      </div>

      {/* ───── ARTICLE PHOTO ───── */}
      <div style={{ backgroundColor: 'rgb(215, 237, 246)', padding: '28px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <Picture
            base={FORBES_ARTICLE.photo}
            alt={t.imageAlt}
            width={1280}
            height={746}
            priority
            style={{ borderRadius: '10px', boxShadow: '0 6px 24px rgba(0,0,0,0.18)' }}
          />
          <p
            style={{
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '0.76rem',
              color: '#4b5563',
              fontWeight: 600,
              lineHeight: 1.6,
            }}
          >
            {t.imageAlt}
          </p>
        </div>
      </div>

      {/* ───── ARTICLE ───── */}
      <div style={{ backgroundColor: '#f0f7fc', padding: '34px 0 40px', flex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <article
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 3px 14px rgba(0,0,0,0.10)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '30px 28px 32px' }}>
              <h2
                style={{
                  color: NAVY,
                  fontSize: '1rem',
                  fontWeight: 800,
                  letterSpacing: '0.02em',
                  margin: '0 0 18px',
                  lineHeight: 1.45,
                }}
              >
                {t.h2}
              </h2>

              <p style={{ fontSize: '0.95rem', color: NAVY, fontWeight: 700, lineHeight: 1.8, margin: 0 }}>
                {t.lead}
              </p>

              {t.sections.map((section, i) => (
                <section key={i} style={{ marginTop: '24px' }}>
                  {section.heading && (
                    <h3
                      style={{
                        color: NAVY,
                        fontSize: '1rem',
                        fontWeight: 800,
                        margin: '0 0 10px',
                        lineHeight: 1.45,
                      }}
                    >
                      {section.heading}
                    </h3>
                  )}
                  {section.paragraphs.map((paragraph, j) => (
                    <p
                      key={j}
                      style={{
                        fontSize: '0.85rem',
                        color: '#374151',
                        lineHeight: 1.85,
                        margin: j === 0 ? 0 : '10px 0 0',
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.quote && (
                    <blockquote
                      style={{
                        margin: '16px 0 0',
                        padding: '12px 0 12px 18px',
                        borderLeft: `4px solid ${FORBES_BLUE}`,
                        color: NAVY,
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        fontStyle: 'italic',
                        lineHeight: 1.75,
                      }}
                    >
                      {section.quote}
                    </blockquote>
                  )}
                </section>
              ))}

              {/* Equipment photo from the clinic */}
              <figure style={{ margin: '28px 0 0' }}>
                <Picture
                  base={FORBES_ARTICLE.equipment}
                  alt={t.equipmentAlt}
                  width={1100}
                  height={619}
                  style={{ borderRadius: '10px', boxShadow: '0 3px 14px rgba(0,0,0,0.14)' }}
                />
                <figcaption
                  style={{
                    marginTop: '9px',
                    fontSize: '0.76rem',
                    color: '#4b5563',
                    fontWeight: 600,
                    lineHeight: 1.6,
                  }}
                >
                  {t.equipmentAlt}
                </figcaption>
              </figure>

              {/* ───── SOURCE ───── */}
              <div
                style={{
                  marginTop: '30px',
                  paddingTop: '22px',
                  borderTop: '1px solid #e5e7eb',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div style={{ flex: '1 1 260px' }}>
                  <p style={{ fontSize: '0.8rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
                    {t.sourceNote}
                  </p>
                </div>
                <a
                  href={FORBES_ARTICLE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: FORBES_BLUE,
                    color: '#fff',
                    borderRadius: '6px',
                    padding: '11px 24px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  {t.readFull} →
                </a>
              </div>

              <div style={{ marginTop: '24px' }}>
                <Link
                  to="/media"
                  style={{ color: '#1a56db', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}
                >
                  {t.backToMedia}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

      <YouTubeBanner />
      <Footer />
    </div>
  );
}
