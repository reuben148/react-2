import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../component/footer';
import Hero from '../component/Hero'

const ClothingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=5');
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className='bg-slate-600'>
      <h1 className='text-5xl font-serif text-white transition-transform duration-300 transform hover:scale-105'>Allure textiles</h1>
      <h1 className='text-5xl font-serif text-red-200 transition-transform duration-300 transform hover:scale-105'>Stitching To Everyone's Choice.</h1>

      <Hero />
      {/*<div className=''>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className='border rounded-[15px] shadow-[0_4px_6px_rgba(64,64,64,0.6)] h-[280px] w-[300px] transition-transform duration-300 transform hover:scale-105'>
            <img className='h-[180px] w-[300px] rounded-[10px]' src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            </div>
          </div>*
        ))}
        </div>
      </div>*/}
      <Footer />
    </div>
  );
};

export default ClothingProducts;
