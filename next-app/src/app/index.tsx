import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

console.log("supabaseUrl     ->     "+supabaseUrl);
console.log("supabaseKey     ->     "+supabaseKey);

// Supabaseクライアントの作成
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;