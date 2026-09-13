import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

/** Visits recorded by the previous mago.ge site before the counter moved here. */
const BASELINE = 48142;
const SESSION_KEY = 'visitor_counted';

interface VisitorData {
  total: number;
  todayCount: number;
  loading: boolean;
}

interface Totals {
  total: number;
  today: number;
}

/**
 * Counts this browser session once per day (via the `increment_visitor`
 * RPC, which decides server-side which day the visit belongs to) and returns
 * the all-time total plus today's count from `visitor_totals`.
 */
export function useVisitorCount(): VisitorData {
  const [totals, setTotals] = useState<Totals>({ total: 0, today: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const alreadyCounted = sessionStorage.getItem(SESSION_KEY) === today;

    async function recordAndFetch() {
      // Claim the session before the request goes out, so a second mount
      // (React StrictMode, remounts) cannot fire a second increment.
      if (!alreadyCounted) sessionStorage.setItem(SESSION_KEY, today);
      try {
        const { data, error } = alreadyCounted
          ? await supabase.rpc('visitor_totals')
          : await supabase.rpc('increment_visitor');

        if (error && !alreadyCounted) sessionStorage.removeItem(SESSION_KEY);

        const row = Array.isArray(data) ? data[0] : data;
        if (row && typeof row.total !== 'undefined') {
          setTotals({ total: Number(row.total), today: Number(row.today) });
        }
      } catch {
        // Counter is decorative — never let it break the page.
      }
      setLoading(false);
    }

    recordAndFetch();
  }, []);

  return {
    total: BASELINE + totals.total,
    todayCount: totals.today,
    loading,
  };
}
