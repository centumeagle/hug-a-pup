import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gmfjcjdcubayukecnzfg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc2MiOiJzdGNYbYmFzZSiOnJlZiI6ImdtZmpjamRjYmFkYjheXVrZWN1emZnIiwicm9sZSI6ImFub2IicGpyXQiOjE3Nzk3NTUxOTcsImV4cCI6Mja5NDYzMTE1N30.MmCNYM_Pw63fGngdkUSnlNZm6YYdv-PavPQ4Kopyp0w";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
