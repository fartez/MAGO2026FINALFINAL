import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import YouTubeBanner from '../components/YouTubeBanner';
import FloatingButtons from '../components/FloatingButtons';
import { useLanguage } from '../contexts/LanguageContext';
import { usePersonaTranslations, PERSONA_PATH, PERSONA_LINKS } from '../translations/persona';
import { useSeo } from '../hooks/useSeo';

/**
 * Award photos supplied by the client go here. While a slot is empty the page
 * shows a placeholder frame of the same proportions, so the layout does not
 * shift once the real photograph is dropped in.
 */
const HERO_PHOTO = '';
const AWARD_PHOTO = '';

function PhotoSlot({
  src,
  alt,
  placeholder,
  ratio,
}: {
  src: string;
  alt: string;
  placeholder: string;
  ratio: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          borderRadius: '10px',
          boxShadow: '0 6px 24px rgba(0,0,0,0.18)',
          objectFit: 'cover',
        }}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      style={{
        width: '100%',
        aspectRatio: ratio,
        borderRadius: '10px',
        border: '2px dashed #9db4d4',
        backgroundColor: '#eef4fb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        color: '#5b7398',
        fontSize: '0.8rem',
        fontWeight: 600,
        lineHeight: 1.6,
      }}
    >
      {placeholder}
    </div>
  );
}

export default function PersonaPage() {
  const { language } = useLanguage();
  const t = usePersonaTranslations(language);

  useSeo({
    language,
    title: t.seoTitle,
    description: t.seoDescription,
    keywords: t.seoKeywords,
    ogTitle: t.ogTitle,
    ogDescription: t.ogDescription,
    ogImage: HERO_PHOTO || '/images/makaimage.jpeg',
    ogImageAlt: t.imageAlt,
    canonicalPath: PERSONA_PATH,
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Navigation />
      <FloatingButtons />

      {/* ───── HERO ───── */}
      <div style={{ backgroundColor: '#00265E', color: '#fff', padding: '40px 20px 44px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '14px',
            }}
          >
            <span
              style={{
                border: '1px solid #d4af37',
                color: '#d4af37',
                borderRadius: '20px',
                padding: '3px 18px',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.28em',
              }}
            >
              {t.badge}
            </span>
            <span
              style={{
                backgroundColor: '#1a56db',
                color: '#fff',
                borderRadius: '20px',
                padding: '3px 14px',
                fontSize: '0.76rem',
                fontWeight: 700,
              }}
            >
              {t.date}
            </span>
          </div>

          <p
            style={{
              textAlign: 'center',
              margin: '0 0 16px',
              fontSize: '0.85rem',
              opacity: 0.82,
              lineHeight: 1.6,
            }}
          >
            {t.eyebrow}
          </p>

          <h1
            style={{
              textAlign: 'center',
              fontSize: 'clamp(1.5rem, 4vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.35,
              margin: 0,
            }}
          >
            {t.h1}
          </h1>

          <div
            style={{
              width: '90px',
              height: '3px',
              backgroundColor: '#d4af37',
              margin: '22px auto 0',
              borderRadius: '2px',
            }}
          />
        </div>
      </div>

      {/* ───── MAIN PHOTO ───── */}
      <div style={{ backgroundColor: 'rgb(215, 237, 246)', padding: '32px 0' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 20px' }}>
          <PhotoSlot src={HERO_PHOTO} alt={t.imageAlt} placeholder={t.photoPlaceholder} ratio="16 / 10" />
          <p
            style={{
              textAlign: 'center',
              marginTop: '12px',
              fontSize: '0.78rem',
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
      <div style={{ backgroundColor: '#f0f7fc', padding: '36px 0 40px', flex: 1 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <article
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 3px 14px rgba(0,0,0,0.10)',
              overflow: 'hidden',
            }}
          >
            <div style={{ borderTop: '4px solid #d4af37' }} />

            <div style={{ padding: '30px 28px 32px' }}>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#00265E',
                  fontWeight: 700,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {t.lead}
              </p>

              {t.sections.map((section, i) => (
                <section key={i} style={{ marginTop: '26px' }}>
                  <h2
                    style={{
                      color: '#00265E',
                      fontSize: '1rem',
                      fontWeight: 800,
                      margin: '0 0 10px',
                      lineHeight: 1.45,
                    }}
                  >
                    {section.heading}
                  </h2>
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
                </section>
              ))}

              {/* Award / diploma photo */}
              <div style={{ marginTop: '30px', maxWidth: '460px' }}>
                <PhotoSlot
                  src={AWARD_PHOTO}
                  alt={t.awardImageAlt}
                  placeholder={t.awardPlaceholder}
                  ratio="4 / 3"
                />
                <p
                  style={{
                    marginTop: '10px',
                    fontSize: '0.76rem',
                    color: '#4b5563',
                    fontWeight: 600,
                    lineHeight: 1.6,
                  }}
                >
                  {t.awardImageAlt}
                </p>
              </div>

              {/* ───── LINKS ───── */}
              <div
                style={{
                  marginTop: '32px',
                  paddingTop: '22px',
                  borderTop: '1px solid #e5e7eb',
                }}
              >
                <h2
                  style={{
                    color: '#00265E',
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    margin: '0 0 14px',
                  }}
                >
                  {t.linksTitle}
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <a
                    href={PERSONA_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#CC0000',
                      color: '#fff',
                      borderRadius: '6px',
                      padding: '9px 20px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    {t.youtubeLabel}
                  </a>
                  <a
                    href={PERSONA_LINKS.mago}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#00265E',
                      color: '#fff',
                      borderRadius: '6px',
                      padding: '9px 20px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    {t.magoLinkLabel}
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '26px' }}>
                <Link
                  to="/media"
                  style={{
                    color: '#1a56db',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
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
