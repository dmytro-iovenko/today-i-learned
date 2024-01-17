import apikey from "./config";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jpnjisjdtomhzxdyhcrm.supabase.co'
const supabaseKey = apikey
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;