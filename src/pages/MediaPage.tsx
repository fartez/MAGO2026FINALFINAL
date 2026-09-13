import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import YouTubeBanner from '../components/YouTubeBanner';
import FloatingButtons from '../components/FloatingButtons';
import { useLanguage } from '../contexts/LanguageContext';
import { usePersonaTranslations, PERSONA_PATH } from '../translations/persona';
import { useMediaTranslations } from '../translations/media';

type MediaType = 'tv' | 'radio' | 'award';

/**
 * Structural data for every publication (text lives in translations/media.ts,
 * keyed by `id`). Dates are dd.mm.yyyy; the list is sorted newest-first at
 * render time, so new entries can be appended anywhere.
 */
interface MediaItem {
  id: string;
  date: string;
  type: MediaType;
  featured?: boolean;
  video?: { id: string; start?: number };
  videoLink?: string;
  image?: string;
  phone?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 'anano',
    date: '08.10.2026',
    type: 'tv',
    featured: true,
    video: { id: 'hWrwOMahiZg', start: 4 },
    videoLink: 'https://www.youtube.com/watch?v=hWrwOMahiZg',
    phone: '599 506 507',
  },
  { id: 'iveria', date: '23.02.2026', type: 'radio', image: '/images/makaimage.jpeg' },
  { id: 'persona', date: '11.02.2026', type: 'award' },
  { id: 'palitra2025', date: '05.03.2025', type: 'tv', video: { id: 'S66KHWIoex8', start: 40 } },
  { id: 'postv', date: '18.07.2023', type: 'tv', video: { id: 'CjFQuVTuYT4', start: 433 } },
  { id: 'gds', date: '22.05.2020', type: 'tv' },
  { id: 'mir', date: '24.12.2018', type: 'tv', video: { id: 'L5gxAOIK1SQ' } },
];

function dateKey(date: string) {
  const [d, m, y] = date.split('.');
  return `${y}${m}${d}`;
}

const sortedItems = [...mediaItems].sort((a, b) => dateKey(b.date).localeCompare(dateKey(a.date)));

const NAVY = '#00265E';
const BLUE = '#1a56db';
const BAND_LIGHT = '#f0f7fc';
const BAND_DARK = 'rgb(215, 237, 246)';

function VideoEmbed({ videoId, startSeconds }: { videoId: string; startSeconds?: number }) {
  const src = `https://www.youtube.com/embed/${videoId}${startSeconds ? `?start=${startSeconds}` : ''}`;
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
      }}
    >
      <iframe
        src={src}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}

function CardHeader({ date, typeLabel, source }: { date: string; typeLabel: string; source: string }) {
  return (
    <div
      style={{
        backgroundColor: NAVY,
        padding: '12px 22px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
      }}
    >
      <span
        style={{
          backgroundColor: BLUE,
          color: '#fff',
          borderRadius: '20px',
          padding: '3px 14px',
          fontSize: '0.78rem',
          fontWeight: 700,
        }}
      >
        {date}
      </span>
      <span
        style={{
          border: '1px solid rgba(255,255,255,0.45)',
          color: '#fff',
          borderRadius: '20px',
          padding: '2px 12px',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
        }}
      >
        {typeLabel}
      </span>
      <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>{source}</span>
    </div>
  );
}

const paragraphStyle = { fontSize: '0.82rem', color: '#374151', lineHeight: 1.75 } as const;

export default function MediaPage() {
  const { language } = useLanguage();
  const t = useMediaTranslations(language);
  const p = usePersonaTranslations(language);

  const typeLabel: Record<MediaType, string> = { tv: t.typeTv, radio: t.typeRadio, award: t.typeAward };

  const renderBody = (item: MediaItem) => {
    if (item.id === 'persona') {
      return (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            padding: '26px 28px 28px',
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-block',
                border: '1px solid #b8952d',
                color: '#b8952d',
                borderRadius: '20px',
                padding: '2px 16px',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.28em',
                marginBottom: '12px',
              }}
            >
              {p.badge}
            </span>
            <h3 style={{ color: NAVY, fontSize: '1.15rem', fontWeight: 800, margin: '0 0 4px', lineHeight: 1.4 }}>
              {p.kicker}
            </h3>
            <p style={{ color: NAVY, fontSize: '0.95rem', fontWeight: 700, margin: '0 0 12px' }}>{p.name}</p>
            <p style={{ ...paragraphStyle, margin: 0 }}>{p.lead}</p>
            <Link
              to={PERSONA_PATH}
              style={{
                display: 'inline-block',
                marginTop: '18px',
                backgroundColor: NAVY,
                color: '#fff',
                borderRadius: '6px',
                padding: '9px 22px',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              {p.readMore} →
            </Link>
          </div>

          {/* Photo slot — replaced with the ceremony photograph once supplied */}
          <div
            role="img"
            aria-label={p.imageAlt}
            style={{
              width: '100%',
              aspectRatio: '16 / 10',
              borderRadius: '10px',
              border: '2px dashed #9db4d4',
              backgroundColor: '#eef4fb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '18px',
              color: '#5b7398',
              fontSize: '0.78rem',
              fontWeight: 600,
              lineHeight: 1.6,
            }}
          >
            {p.photoPlaceholder}
          </div>
        </div>
      );
    }

    const text = t.items[item.id];
    const hasSideContent = item.video || item.image || text.timestamps;

    return (
      <div style={{ padding: '24px 28px' }}>
        <h3
          style={{
            color: NAVY,
            fontSize: item.featured ? '1.05rem' : '0.95rem',
            fontWeight: item.featured ? 800 : 700,
            marginBottom: '14px',
            lineHeight: 1.45,
          }}
        >
          {text.title}
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: hasSideContent ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
            gap: '24px',
          }}
        >
          {/* Text column */}
          {(text.paragraphs || text.linkText) && (
            <div>
              {text.paragraphs?.map((paragraph, i) => (
                <p key={i} style={{ ...paragraphStyle, margin: i === 0 ? 0 : '10px 0 0' }}>
                  {paragraph}
                </p>
              ))}
              {text.linkText && (
                <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                  {item.videoLink ? (
                    <a
                      href={item.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: BLUE, fontWeight: 700, textDecoration: 'underline' }}
                    >
                      {text.linkText}
                    </a>
                  ) : (
                    text.linkText
                  )}
                  {text.linkAuthor && <> {text.linkAuthor}</>}
                </p>
              )}
              {item.phone && (
                <div style={{ marginTop: '16px' }}>
                  <p style={{ ...paragraphStyle, margin: 0 }}>
                    <strong>{t.detailsLabel}</strong>
                  </p>
                  <p style={{ ...paragraphStyle, margin: '4px 0 0' }}>
                    {t.callToBook}&nbsp;
                    <a href={`tel:+995${item.phone.replace(/\s/g, '')}`} style={{ color: BLUE, fontWeight: 700 }}>
                      {item.phone}
                    </a>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Media column */}
          {item.video && (
            <div style={text.timestamps ? undefined : { maxWidth: '640px' }}>
              <VideoEmbed videoId={item.video.id} startSeconds={item.video.start} />
            </div>
          )}

          {item.image && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={item.image}
                alt={text.imageAlt || text.title}
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                  objectFit: 'cover',
                }}
              />
            </div>
          )}

          {text.timestamps && (
            <div>
              <p style={{ fontSize: '0.8rem', color: '#374151', fontWeight: 600, marginBottom: '10px' }}>
                {t.navigationLabel}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {text.timestamps.map((ts, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      padding: '5px 0',
                      borderBottom: '1px solid #e5e7eb',
                      fontSize: '0.78rem',
                      color: '#374151',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        backgroundColor: NAVY,
                        color: '#fff',
                        borderRadius: '6px',
                        padding: '1px 8px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        alignSelf: 'flex-start',
                        minWidth: '44px',
                        textAlign: 'center',
                      }}
                    >
                      {ts.time}
                    </span>
                    <span>{ts.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Navigation />
      <FloatingButtons />

      {/* Hero */}
      <div style={{ backgroundColor: NAVY, color: '#fff', padding: '48px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '0.04em', margin: 0 }}>{t.heroTitle}</h1>
        <p style={{ marginTop: '10px', fontSize: '1rem', opacity: 0.8 }}>{t.heroSubtitle}</p>
      </div>

      {/* Publications, newest first */}
      {sortedItems.map((item, index) => {
        const source = item.id === 'persona' ? p.eyebrow : t.items[item.id].source;
        return (
          <div
            key={item.id}
            style={{ backgroundColor: index % 2 === 0 ? BAND_DARK : BAND_LIGHT, padding: '32px 0' }}
          >
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  boxShadow: item.featured ? '0 3px 14px rgba(0,0,0,0.10)' : '0 2px 10px rgba(0,0,0,0.09)',
                  overflow: 'hidden',
                }}
              >
                <CardHeader date={item.date} typeLabel={typeLabel[item.type]} source={source} />
                {renderBody(item)}
              </div>
            </div>
          </div>
        );
      })}

      <YouTubeBanner />
      <Footer />
    </div>
  );
}
