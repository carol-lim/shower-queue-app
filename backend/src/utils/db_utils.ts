import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();


const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_ANON_KEY as string;


if (!supabaseUrl) {
  throw new Error('SUPABASE_URL environment variable is required.');
}

if (!supabaseKey) {
  throw new Error('SUPABASE_ANON_KEY environment variable is required.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase