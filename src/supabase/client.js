import {createClient} from '@supabase/supabase-js'

export const supabaseApp = createClient(
    'https://oxjjsdzpymlpfoxewfjx.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94ampzZHpweW1scGZveGV3Zmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2ODM5MTQsImV4cCI6MTk5MDI1OTkxNH0.md9n8LAXDgWYjTO5Ly6adWDJEHPZy0N0OZLYvXYsTl4'
    );

    