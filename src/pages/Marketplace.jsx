import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Filter, Search } from 'lucide-react';

export default function Marketplace() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');

  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Dairy', 'Meat', 'Other'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, 'products'));
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products;

    if (searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (maxPrice) {
      result = result.filter(p => parseFloat(p.price) <= parseFloat(maxPrice));
    }

    if (location) {
      result = result.filter(p => p.location?.toLowerCase().includes(location.toLowerCase()));
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, maxPrice, location, products]);

  if (loading) return <LoadingSpinner fullScreen />;

  return (
    <div className="container page-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Marketplace</h1>
        <p style={{ color: 'var(--text-light)', margin: 0, fontSize: '1.125rem' }}>
          Showing {filteredProducts.length} freshest products
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Filters Sidebar/Top */}
        <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-green)', fontWeight: 'bold', fontSize: '1.125rem' }}>
            <Filter size={20} />
            Filters
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div>
              <label className="input-label" style={{ fontSize: '0.875rem' }}>Search Products</label>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="e.g. Tomatoes" 
                  style={{ paddingLeft: '2.25rem' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="input-label" style={{ fontSize: '0.875rem' }}>Category</label>
              <select 
                className="input-field"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="input-label" style={{ fontSize: '0.875rem' }}>Max Price ($)</label>
              <input 
                type="number" 
                className="input-field" 
                placeholder="Any" 
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>

            <div>
              <label className="input-label" style={{ fontSize: '0.875rem' }}>Location</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. California" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '1.5rem', backgroundColor: '#f7fafc', borderRadius: '50%', color: 'var(--text-light)', marginBottom: '1rem' }}>
              <Search size={40} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No products found</h3>
            <p style={{ color: 'var(--text-light)' }}>Try adjusting your search or filters to see more results.</p>
            <button 
              className="btn btn-outline" 
              style={{ marginTop: '1.5rem' }}
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setMaxPrice('');
                setLocation('');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
