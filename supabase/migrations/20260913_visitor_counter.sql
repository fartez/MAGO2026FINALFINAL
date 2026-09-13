-- Visitor counter shown in the site footer.
-- Applied to the "MAGO" Supabase project (zhqurtgodwmjzuhreyjw) on 2026-09-13.

create table if not exists public.visitor_stats (
  visit_date  date primary key,
  daily_count integer not null default 0 check (daily_count >= 0),
  updated_at  timestamptz not null default now()
);

alter table public.visitor_stats enable row level security;

-- Anyone may read; nobody writes directly (writes go through increment_visitor).
create policy visitor_stats_public_read
  on public.visitor_stats for select to anon, authenticated using (true);

-- "Today" as the clinic sees it, so the daily rollover happens at Tbilisi midnight.
create or replace function public.visitor_today()
returns date language sql stable as $$
  select (now() at time zone 'Asia/Tbilisi')::date;
$$;

-- Totals shown in the footer: all-time sum and today's count.
create or replace function public.visitor_totals()
returns table (total bigint, today integer)
language sql stable security definer set search_path = public as $$
  select
    coalesce((select sum(daily_count) from public.visitor_stats), 0)::bigint as total,
    coalesce((select daily_count from public.visitor_stats where visit_date = public.visitor_today()), 0) as today;
$$;

-- Counts one visit for today and returns the fresh totals.
-- p_date is accepted for compatibility but ignored: the server picks the day.
create or replace function public.increment_visitor(p_date date default null)
returns table (total bigint, today integer)
language plpgsql security definer set search_path = public as $$
begin
  insert into public.visitor_stats (visit_date, daily_count)
  values (public.visitor_today(), 1)
  on conflict (visit_date) do update
    set daily_count = visitor_stats.daily_count + 1,
        updated_at  = now();
  return query select * from public.visitor_totals();
end;
$$;

revoke all on function public.visitor_today() from public;
revoke all on function public.visitor_totals() from public;
revoke all on function public.increment_visitor(date) from public;
grant execute on function public.visitor_today() to anon, authenticated;
grant execute on function public.visitor_totals() to anon, authenticated;
grant execute on function public.increment_visitor(date) to anon, authenticated;
