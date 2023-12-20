import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://vgapznyiurhueqsztrgo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnYXB6bnlpdXJodWVxc3p0cmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3ODk1NjIsImV4cCI6MTk5NDM2NTU2Mn0.cpTGpM0rNhp4Iwbg82o7mUFDKLayECEcyOjOt1jwrFk"
);

export default supabase;