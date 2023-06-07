import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://okyejpilmlbobwtdzgtm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9reWVqcGlsbWxib2J3dGR6Z3RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwOTI2ODgsImV4cCI6MjAwMTY2ODY4OH0.7ZWA2JaTJ7MVX-A4AYfhOAJIn2U_FXRl7XBlNAF4jiw';

export const supabase = createClient(supabaseUrl, supabaseKey);

export function useSupabase() {
  const auth = supabase.auth;
  const storage = supabase.storage;

  return { auth, storage };
}
