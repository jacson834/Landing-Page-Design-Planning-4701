import { createClient } from '@supabase/supabase-js'

let supabase = null;

const initSupabase = async () => {
  try {
    const response = await fetch('/.quest/supabase-credentials.json');
    const credentials = await response.json();
    
    if (!credentials.url || !credentials.key) {
      throw new Error('Missing Supabase credentials');
    }
    
    supabase = createClient(credentials.url, credentials.key);
  } catch (error) {
    console.error('Error initializing Supabase:', error);
    // Create client with empty credentials - will be updated later
    supabase = createClient('', '');
  }
};

// Initialize Supabase
initSupabase();

export default supabase;