const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsYWxseWJ1a3hubGp5dXB2dGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNDk4MzYsImV4cCI6MjAyNzgyNTgzNn0.ikmdLaBo_vQZAmXzs2oAReEsC3_i95RbCUVAuAWt2hg'

const PROJECT_URL = 'https://llallybukxnljyupvtlc.supabase.co'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PROJECT_URL, API_KEY)
