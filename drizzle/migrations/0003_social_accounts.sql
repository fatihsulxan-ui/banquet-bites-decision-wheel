CREATE TABLE public.social_accounts (
  id text PRIMARY KEY CHECK (id IN ('tiktok','instagram','facebook')),
  url text NOT NULL DEFAULT '',
  followers integer CHECK (followers >= 0),
  position integer NOT NULL DEFAULT 0
);
GRANT SELECT ON public.social_accounts TO anon, authenticated;
GRANT ALL ON public.social_accounts TO service_role;
ALTER TABLE public.social_accounts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view social accounts" ON public.social_accounts FOR SELECT TO anon, authenticated USING (true);
INSERT INTO public.social_accounts (id, position) VALUES ('tiktok',1),('instagram',2),('facebook',3);