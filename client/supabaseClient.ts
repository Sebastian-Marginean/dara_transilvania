import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
  'https://jvufvkuufcvdcjriigeq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2dWZ2a3V1ZmN2ZGNqcmlpZ2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0NTEyMjUsImV4cCI6MjA3MzAyNzIyNX0.ACf7OXSkOR2hvqcs2j31qITejO6NKGIKf5l8EaSW0EI'
);