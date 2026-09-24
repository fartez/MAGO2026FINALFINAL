import { Language } from '../contexts/LanguageContext';

export interface PatientVideo {
  id: string;
  /** Seconds to skip before the interview starts. */
  start?: number;
}

export type VideoTopic =
  | 'sielme'
  | 'ambliopia'
  | 'glaukoma'
  | 'astigmatizmi'
  | 'pigmenturiRetiniti'
  | 'sorsmxedveloba';

/**
 * Russian-language patient interviews supplied by the clinic. They replace the
 * Georgian set while the site is being read in Russian; every other language
 * keeps the original videos.
 */
const russianVideos: Record<VideoTopic, PatientVideo[]> = {
  sielme: [
    { id: 'hJd0Y1YVu8g', start: 7 },
    { id: 'FEUjD9o54Ro', start: 29 },
    { id: 'AFPuyEzhKQg', start: 22 },
    { id: 'i8yV-_2iHuI' },
    { id: 'g-JV7ylU5og' },
  ],
  ambliopia: [
    { id: 'b0t2LX_RcwE' },
    { id: 'wa5XatcgvvI', start: 17 },
    { id: 'ZF78R2GGHdU' },
    { id: 'zJp_ZuaHyJM' },
    { id: '1oAwXWekQSQ' },
  ],
  glaukoma: [
    { id: 'l0BPCYt2n-E' },
    { id: '6OzXxBDEt9U', start: 137 },
  ],
  astigmatizmi: [
    { id: 'wcl_KYip0ac', start: 65 },
    { id: 'XCGORMi_erQ' },
    { id: 'jkzfskv9sqA' },
  ],
  pigmenturiRetiniti: [
    { id: 'aqet_pfaWEw', start: 54 },
    { id: 'dlkBSxD7aTM', start: 89 },
    { id: '6D8MVxRJ2Kg', start: 42 },
    { id: 'UW2v96K3ElQ', start: 26 },
    { id: 'PCbGRZ1ohms', start: 144 },
    { id: 'EYnmNMUwHCA' },
    { id: 'gxqLBdswKZw', start: 176 },
    { id: 'zdS5nkRdn14' },
    { id: 'SZhBxnGt-FQ' },
    { id: 'dLcj7mjdng0' },
  ],
  sorsmxedveloba: [
    { id: 'En38GSxE7kM', start: 160 },
    { id: 'biTvG5DdGXA', start: 21 },
    { id: 'z-eSeDhQR1o', start: 17 },
  ],
};

/** Builds an embed URL, keeping the start offset the clinic specified. */
export function embedUrl({ id, start }: PatientVideo) {
  return `https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ''}`;
}

/**
 * The videos to show for one topic: the Russian set when the site is in
 * Russian and we have one, otherwise the page's own list.
 */
export function patientVideos(
  language: Language,
  topic: VideoTopic,
  fallback: (PatientVideo | string)[]
): PatientVideo[] {
  if (language === 'ru' && russianVideos[topic]?.length) return russianVideos[topic];
  return fallback.map((v) => (typeof v === 'string' ? { id: v } : v));
}

export { russianVideos };
