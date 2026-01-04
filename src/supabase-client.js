import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ktltxteiyorhnktpuqru.supabase.co";
const supabaseAnonKey = "sb_publishable_-hmLLyAbPANYc2WMcOYz-g_uVcPPghO";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
