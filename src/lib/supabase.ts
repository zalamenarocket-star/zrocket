import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://svvdgomxqifviuljqdgx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2dmRnb214cWlmdml1bGpxZGd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3NjI3MzMsImV4cCI6MjA5ODMzODczM30.Ze5zGP6wUBP7N4dm5hF31gYDunDYkGoIjQAoTwyjT7M'
)