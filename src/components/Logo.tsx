import { useLanguage } from '../contexts/LanguageContext';

const logoText = {
  ge: { line1: 'თვალის კლინიკა', line2: 'ახალი ტექნოლოგიები' },
  en: { line1: 'EYE CLINIC', line2: 'New Technologies' },
  ru: { line1: 'ГЛАЗНАЯ КЛИНИКА', line2: 'Новые технологии' },
};

interface LogoProps {
  /**
   * Sets both the logo height and the font-size it scales from, so every
   * inner measurement below can be expressed in `em` and stay proportional.
   * Height and text size must always be changed together.
   */
  className?: string;
}

export default function Logo({
  className = 'h-10 text-[40px] md:h-16 md:text-[64px]',
}: LogoProps) {
  const { language } = useLanguage();
  const { line1, line2 } = logoText[language];

  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/images/logo-eye.png"
        alt=""
        aria-hidden="true"
        className="h-full w-auto shrink-0"
      />

      <span
        className="flex flex-col justify-center leading-none"
        style={{ gap: '0.18em', marginLeft: '0.04em', marginRight: '0.07em' }}
      >
        <span className="font-bold whitespace-nowrap" style={{ color: '#EB3C00', fontSize: '0.26em' }}>
          {line1}
        </span>
        <span className="font-bold whitespace-nowrap" style={{ color: '#0F70B8', fontSize: '0.26em' }}>
          {line2}
        </span>
      </span>

      <img src="/images/logo-mago.png" alt="MaGo" className="h-full w-auto shrink-0" />
    </span>
  );
}
