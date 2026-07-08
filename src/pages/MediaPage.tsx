import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import YouTubeBanner from '../components/YouTubeBanner';
import FloatingButtons from '../components/FloatingButtons';

function DateBadge({ date, tv }: { date: string; tv: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
      <span
        style={{
          backgroundColor: '#1a56db',
          color: '#fff',
          borderRadius: '20px',
          padding: '3px 14px',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.03em',
          whiteSpace: 'nowrap',
        }}
      >
        {date}
      </span>
      <span
        style={{
          color: '#4b5563',
          fontSize: '0.8rem',
          fontWeight: 600,
        }}
      >
        {tv}
      </span>
    </div>
  );
}

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
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
}

const timestamps = [
  { time: '1:18', text: 'POST TV დაინტერესდა — რატომ ხედავს ადამიანი ცუდად, რითი არის განპირობებული' },
  { time: '5:24', text: 'რჩევები ოჯახის წევრებისათვის — როგორ შემჩნიოთ, რომ პატარა ცუდად ხედავს' },
  { time: '6:34', text: 'როგორ შეიძლება მხოლოდ აპარატურული პერსონიფიცირებული მკურნალობა — რას გულისხმობს?' },
  { time: '7:29', text: 'როგორ აღდგენთ მხედველობას მაგოთერაპიით ორგანიზმის რესურსზე დაყრდნობით' },
  { time: '9:47', text: 'როგორ იკვლევთ ორგანიზმის რესურსს' },
  { time: '10:37', text: 'როგორ ხდება აპარატურით მხედველობის აღდგენა' },
  { time: '11:01', text: 'რა არის პარაბიოზი და რა კავშირი აქვს ძილთან ან მხედველობის აღდგენასთან' },
  { time: '12:02', text: 'რაზეა დამოკიდებული მხედველობის აღდგენა ელვისებურად — რა კავშირი აქვს მას ტვინთან' },
  { time: '14:16', text: 'პროცედურულად რას აკეთებთ, რომ არსებული რესურსი აპარატურით ააღორძინოთ' },
  { time: '15:05', text: 'რას ნიშნავს და როგორ აკეთებთ სატესტო პროცედურას' },
  { time: '15:39', text: 'რამდენჯერ არის საჭირო კლინიკაში მოსვლა, რომ შედეგი გამყარდეს' },
  { time: '16:37', text: 'რამდენ ხანს გრძელდება 1 საათში მომატებული მხედველობა' },
  { time: '17:35', text: 'რა დაავადების მქონე პაციენტები მოდიან სამკურნალოდ' },
  { time: '18:44', text: 'რა უკუჩვენება და რისკი არის მაგოთერაპიით მკურნალობისას' },
];

export default function MediaPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Navigation />
      <FloatingButtons />

      {/* Hero */}
      <div
        style={{
          backgroundColor: '#00265E',
          color: '#fff',
          padding: '48px 24px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '0.04em', margin: 0 }}>
          მედია
        </h1>
        <p style={{ marginTop: '10px', fontSize: '1rem', opacity: 0.8 }}>
          ტელე და რადიო გადაცემები · პაციენტების გამოცდილება
        </p>
      </div>

      {/* ───── FEATURED: ანანო თავხელიძე ───── */}
      <div style={{ backgroundColor: 'rgb(215, 237, 246)', padding: '36px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

          {/* Card header */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 3px 14px rgba(0,0,0,0.10)',
              overflow: 'hidden',
            }}
          >
            {/* Blue top bar */}
            <div
              style={{
                backgroundColor: '#00265E',
                padding: '14px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  backgroundColor: '#1a56db',
                  color: '#fff',
                  borderRadius: '20px',
                  padding: '3px 16px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                }}
              >
                08.10.2026
              </span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>
                TV PALITRA NEWS &nbsp;|&nbsp; გადაცემა მკურნალი
              </span>
            </div>

            {/* Two-col layout: text + video */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '28px',
                padding: '28px 28px 24px',
              }}
            >
              {/* Text */}
              <div>
                <h2
                  style={{
                    color: '#00265E',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    marginBottom: '10px',
                    lineHeight: 1.4,
                  }}
                >
                  ანანო თავხელიძე
                </h2>
                <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  პაციენტის მშობელი უზიარებს 9 წლის შვილის მკურნალობის შედეგებს მაგოთერაპიით
                  მკურნალობისას. პატარა ბიჭუნსა ჰქონდა საკმაოდ რთული დიაგნოზები — მაღალი
                  ხარისხის მიოპია, ასტიგმატიზმი, ბადურის პიგმენტური რეტინიტი, სიელმე და სხვა.
                </p>
                <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                  როგორც თვითონ აღნიშნავს, თვალის კლინიკა „ახალი ტექნოლოგიები — MaGo"-ს
                  საკმაოდ იმედგაცრუებულმა, სკეპტიკურად განწყობილმა მიაკითხა — როგორც ბოლო
                  შანსი, რადგან ბოლომდე არ ეჯერა, რომ ასე მოკლე დროში ქირურგიის და
                  მედიკამენტების გარეშე შესაძლებელი იყო მხედველობის აღდგენა.
                </p>
                <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                  მანამდე ბავშვის მკურნალობა გავრცელებული მეთოდებით ხდებოდა, რამაც შედეგი
                  ვერ გამოიღო. გაიარა კონსულტაცია თურქეთსა და გერმანიაში, სადაც კვლავ მსგავს
                  მეთოდებით მკურნალობას სთავაზობდნენ.
                </p>
                <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                  მაგოთერაპიით ორჯერ ათ დღიანი მკურნალობისას ბიჭუნას იმდენად მოემატა
                  მხედველობა, რომ სათვალე −9.0 დიოპტრიებით −6.0 დიოპტრიით შეიცვალა.
                  სიელმე (გადახრა), რომელსაც სათვალეც ვერ უსწორება — გასწორდა!
                </p>
                <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                  ეს იმდენად დაუჯერებელი იყო, რომ გადასამოწმებლად მიაკითხა სხვა ექიმს.
                  როდესაც მან დაუდასტურა მხედველობის აღდგენა და სიელმის კუთხის მაქსიმალური
                  შემცირება, მაშინ მართლა ირწმუნა, რომ მხოლოდ აპარატურული პერსონიფიცირებული
                  მკურნალობით — მაგოთერაპია — შესაძლებელია მხედველობის აღდგენა!
                </p>
                <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                  პაციენტის დედა ურჩევს ყველა სასოწარკვეთილ პაციენტს ან მის მშობლებს
                  დაიჯერონ, რომ მაგოთერაპია ეს არის მხედველობის აღდგენის ეფექტური,
                  უმტკივნეულო და უსაფრთხო გზა, რის დასტურადაც მაგოთერაპია დაცულია
                  საერთაშორისო პატენტებით.
                </p>
                <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                  <a
                    href="https://www.youtube.com/watch?v=hWrwOMahiZg"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#1a56db', fontWeight: 700, textDecoration: 'underline' }}
                  >
                    პაციენტის დედა გიზიარებთ გამოცდილებას და მოგიწოდებთ მიმართოთ
                    მხედველობის აღდგენის უსაფრთხო მეთოდს — მაგოთერაპია.
                  </a>{' '}
                  ანანო თავხელიძე
                </p>
                <div style={{ marginTop: '16px' }}>
                  <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.7, margin: 0 }}>
                    <strong>დეტალური ინფორმაცია · პაციენტების გამოცდილება</strong>
                  </p>
                  <p style={{ fontSize: '0.82rem', color: '#374151', margin: '4px 0 0' }}>
                    ჩასაწერათ დარეკეთ&nbsp;
                    <a href="tel:+995599506507" style={{ color: '#1a56db', fontWeight: 700 }}>
                      599 506 507
                    </a>
                  </p>
                </div>
              </div>

              {/* Video */}
              <div>
                <VideoEmbed videoId="hWrwOMahiZg" startSeconds={4} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───── SECTION HEADING ───── */}
      <div
        style={{
          backgroundColor: '#00265E',
          color: '#fff',
          textAlign: 'center',
          padding: '18px 24px',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.05em' }}>
          TV გადაცემები
        </h2>
      </div>

      {/* ───── CARD 1: Palitra TV 05.03.2025 ───── */}
      <div style={{ backgroundColor: '#f0f7fc', padding: '32px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.09)',
              overflow: 'hidden',
            }}
          >
            <div style={{ backgroundColor: '#00265E', padding: '12px 22px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ backgroundColor: '#1a56db', color: '#fff', borderRadius: '20px', padding: '3px 14px', fontSize: '0.78rem', fontWeight: 700 }}>
                05.03.2025
              </span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>
                TV PALITRA NEWS &nbsp;|&nbsp; გადაცემა მკურნალი
              </span>
            </div>
            <div style={{ padding: '24px 28px' }}>
              <h3 style={{ color: '#00265E', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', lineHeight: 1.45 }}>
                მხედველობის აღდგენა მხოლოდ აპარატურული მკურნალობით — მაგოთერაპია
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div>
                  <VideoEmbed videoId="S66KHWIoex8" startSeconds={40} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: '#374151', fontWeight: 600, marginBottom: '10px' }}>
                    გადაცემის ნავიგაცია (წუთები):
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {timestamps.map((ts, i) => (
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
                            backgroundColor: '#00265E',
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───── CARD 2: TV POSTV 18.07.2023 ───── */}
      <div style={{ backgroundColor: 'rgb(215, 237, 246)', padding: '32px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.09)', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#00265E', padding: '12px 22px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ backgroundColor: '#1a56db', color: '#fff', borderRadius: '20px', padding: '3px 14px', fontSize: '0.78rem', fontWeight: 700 }}>
                18.07.2023
              </span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>
                TV POST
              </span>
            </div>
            <div style={{ padding: '24px 28px' }}>
              <h3 style={{ color: '#00265E', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px' }}>
                თვალის სნეულებების თანამედროვე მკურნალობა მხოლოდ აპარატურით — მაგოთერაპია
              </h3>
              <div style={{ maxWidth: '640px' }}>
                <VideoEmbed videoId="CjFQuVTuYT4" startSeconds={433} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───── CARD 3: МИР ТВ 24.12.2018 ───── */}
      <div style={{ backgroundColor: '#f0f7fc', padding: '32px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.09)', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#00265E', padding: '12px 22px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ backgroundColor: '#1a56db', color: '#fff', borderRadius: '20px', padding: '3px 14px', fontSize: '0.78rem', fontWeight: 700 }}>
                24.12.2018
              </span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>
                Российское телевидение МИР &nbsp;|&nbsp; Новости
              </span>
            </div>
            <div style={{ padding: '24px 28px' }}>
              <h3 style={{ color: '#00265E', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px' }}>
                В Грузии глазные болезни лечат с помощью Маготерапии
              </h3>
              <div style={{ maxWidth: '640px' }}>
                <VideoEmbed videoId="L5gxAOIK1SQ" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───── CARD 4: TV GDS 22.05.2020 (text only) ───── */}
      <div style={{ backgroundColor: 'rgb(215, 237, 246)', padding: '32px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.09)', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#00265E', padding: '12px 22px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ backgroundColor: '#1a56db', color: '#fff', borderRadius: '20px', padding: '3px 14px', fontSize: '0.78rem', fontWeight: 700 }}>
                22.05.2020
              </span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>
                TV GDS
              </span>
            </div>
            <div style={{ padding: '24px 28px' }}>
              <h3 style={{ color: '#00265E', fontSize: '0.95rem', fontWeight: 700, marginBottom: '12px' }}>
                როგორ აღდგება მხედველობა მხოლოდ აპარატურით — მკურნალობის დემონსტრაცია ღია ეთერში
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.7, margin: 0 }}>
                TV GDS-ის ფარგლებში, ფეისბუქის ღია ეთერში, ჩატარდა მხედველობის
                აღდგენის პროცედურის ლაივ დემონსტრაცია. გადაცემა მიმაგრებულია
                კლინიკის ფეისბუქ გვერდზე.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ───── SECTION HEADING: რადიო ───── */}
      <div style={{ backgroundColor: '#00265E', color: '#fff', textAlign: 'center', padding: '18px 24px' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.05em' }}>
          რადიო
        </h2>
      </div>

      {/* ───── CARD 5: Radio Iveria 23.02.2026 ───── */}
      <div style={{ backgroundColor: '#f0f7fc', padding: '32px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.09)', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#00265E', padding: '12px 22px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ backgroundColor: '#1a56db', color: '#fff', borderRadius: '20px', padding: '3px 14px', fontSize: '0.78rem', fontWeight: 700 }}>
                23.02.2026
              </span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>
                რადიო ივერია საპატრიარქოს (105.5) &nbsp;|&nbsp; გადაცემა „კონსილიუმი"
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px', padding: '24px 28px' }}>
              <div>
                <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  თუ გაინტერესებთ, როგორ შეამჩნიოთ, რომ თქვენს ახლობელს სასწრაფოდ ესაჭიროება
                  თუ არა თვალის ექიმთან გასინჯვა, რა არის აპარატურული მკურნალობა — მაგოთერაპია
                  და როგორ აღდგება მხედველობა განუკურნებადი დაავადებების დროს, მოუსმინეთ
                  საპატრიარქოს არხზე რადიო ივერია, გადაცემა „კონსილიუმი".
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src="/images/makaimage.jpeg"
                  alt="რადიო ივერია — გადაცემა კონსილიუმი"
                  style={{
                    width: '100%',
                    maxWidth: '380px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───── SECTION HEADING: ჯილდოები ───── */}
      <div style={{ backgroundColor: '#00265E', color: '#fff', textAlign: 'center', padding: '18px 24px' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.05em' }}>
          ჯილდოები და აღიარება
        </h2>
      </div>

      {/* ───── CARD 6: Persona Award 11.02.2026 ───── */}
      <div style={{ backgroundColor: 'rgb(215, 237, 246)', padding: '32px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.09)', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#00265E', padding: '12px 22px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ backgroundColor: '#1a56db', color: '#fff', borderRadius: '20px', padding: '3px 14px', fontSize: '0.78rem', fontWeight: 700 }}>
                11.02.2026
              </span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>
                საქართველოს წარმატებული ადამიანების დაჯილდოების ცერემონია „პერსონა"
              </span>
            </div>
            <div style={{ padding: '24px 28px' }}>
              <h3 style={{ color: '#00265E', fontSize: '0.95rem', fontWeight: 700, marginBottom: '14px', lineHeight: 1.5 }}>
                „ათწლეულის პერსონა" მედიცინის განვითარებაში შეტანილი განსაკუთრებული
                წვლილისთვის — ქალბატონ მაკა გოგიაშვილს
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                მაკა გოგიაშვილი — მეცნიერი და გამომგონებელი, მედიცინის დოქტორი,
                საერთაშორისო პატენტებით დაცული 12 სამეცნიერო გამოგონების ავტორი და
                უნიკალური მეთოდის — მაგოთერაპიის (მაკა გოგიაშვილის თერაპიის) შემქმნელი.
              </p>
              <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                ქალბატონი მაკა არის ევროპელ ოფთალმოლოგთა საბჭოს წევრი, ამერიკული
                სამეცნიერო და ოფთალმოლოგიური აკადემიების ქმედითი წევრი. მიღებული
                აქვს ევროპული აკრედიტაციის საბჭოს უწყვეტი განათლების სერტიფიკატი
                (EACCME) და ამერიკული აკადემიის (AMA) აღიარება. იგი ასევე გახლავთ
                კლინიკა „ახალი ტექნოლოგიები – MaGo"-ს კლინიკური ხელმძღვანელი.
              </p>
              <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                მაკა გოგიაშვილი მრავალწლიანი სამეცნიერო და კლინიკური გამოცდილების
                მქონე ექიმი-მეცნიერია. მან დაამთავრა თბილისის სახელმწიფო სამედიცინო
                ინსტიტუტი, ხოლო სტუდენტობის წლებში მისი სამეცნიერო ნაშრომები და
                მოხსენებები საერთაშორისო სტუდენტურ კონფერენციებზე ორი ოქროს მედლით
                დაჯილდოვდა.
              </p>
              <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                სამეცნიერო საქმიანობის გასაგრძელებლად მან წარმატებით დაიცვა როგორც
                საკანდიდატო, ასევე სადოქტორო ხარისხი მოსკოვის თვალის მიკროქირურგიის
                ინსტიტუტში, აკადემიკოს სვიატოსლავ ფიოდოროვის ხელმძღვანელობით. იგი
                ასევე მუშაობდა გამოჩენილ ნეიროფიზიოლოგთან, აკადემიკოს ნატალია
                ბეხტერევასთან, ადამიანის ტვინის ინსტიტუტში, სადაც მიიღო
                უმნიშვნელოვანესი სამეცნიერო და კლინიკური გამოცდილება.
              </p>
              <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                სწორედ ამ გამოცდილებამ ჩაუყარა საფუძველი მის მრავალ გამოგონებასა და
                ინოვაციურ მეთოდს — მაგოთერაპიას, რომელიც ორგანიზმის შინაგანი
                რესურსების გააქტიურებით, მხოლოდ აპარატურის გამოყენებით, ქირურგიული
                ჩარევის, მედიკამენტებისა და გართულებების გარეშე, ბუნებრივი
                ფიზიოლოგიური მეთოდით ახდენს მხედველობის აღდგენას. მეთოდი ეფექტურია
                როგორც თვალის გავრცელებული დაავადებების, ასევე იმ პათოლოგიების
                დროს, რომლებიც ხშირად „განუკურნებელ" დაავადებათა ჯგუფს მიეკუთვნება.
                შედეგები ხშირ შემთხვევაში უკვე მეორე გამოკვლევიდან ერთ საათში შეიმჩნევა.
              </p>
              <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                მაგოთერაპიის უნიკალური შესაძლებლობების გამო, კლინიკა „ახალი
                ტექნოლოგიები – MaGo" პაციენტებს მსოფლიოს სხვადასხვა ქვეყნიდან
                მასპინძლობს. მკურნალობის წარმატების ერთ-ერთი მნიშვნელოვანი საფუძველია
                პერსონიფიცირებული მიდგომა — თითოეული პაციენტისთვის ინდივიდუალური
                სამკურნალო სქემის შემუშავება, რადგან თითოეული ადამიანი უნიკალურია.
              </p>
              <p style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.75, marginTop: '10px' }}>
                მაკა გოგიაშვილის პროფესიონალიზმი, მეცნიერული ხედვა და ინოვაციური
                მიდგომები მნიშვნელოვან წვლილს შეადგენს თანამედროვე მედიცინის
                განვითარებაში და მაგალითს წარმოადგენს მომავალი თაობებისთვის.
              </p>

              {/* Links */}
              <div style={{ marginTop: '18px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href="https://www.youtube.com/@magotherapy/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#CC0000',
                    color: '#fff',
                    borderRadius: '6px',
                    padding: '7px 18px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  YouTube არხი — ვიდეო გალერეა
                </a>
                <a
                  href="https://mago.ge/catpage.php?lang=ka&catpage_id=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#00265E',
                    color: '#fff',
                    borderRadius: '6px',
                    padding: '7px 18px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  პაციენტების გამოცდილება — mago.ge
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <YouTubeBanner />
      <Footer />
    </div>
  );
}
