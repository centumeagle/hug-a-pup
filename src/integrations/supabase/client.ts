import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// ⚠️ 따옴표("") 안에 본인의 실제 주소와 키 값을 입력하세요.
const SUPABASE_URL = "여기에_실제_SUPABASE_URL_주소_입력";
const SUPABASE_PUBLISHABLE_KEY = "여기에_실제_PUBLISHABLE_KEY_값_입력";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
