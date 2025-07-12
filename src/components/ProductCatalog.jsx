// Update the fetchProducts function to handle initialization
const fetchProducts = async () => {
  try {
    // Wait a bit for Supabase to initialize if needed
    if (!supabase) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    const { data, error } = await supabase
      .from('products_ice_cream')
      .select('*');
    
    if (error) throw error;
    setProducts(data || []);
  } catch (error) {
    console.error('Error fetching products:', error);
    setProducts([]);
  } finally {
    setLoading(false);
  }
};