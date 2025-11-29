import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import OccasionCarousel from '../../../productslider';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number; // добавь цену, чтобы отображать в корзине
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => {
        const productData = data.products || data;
        setProducts(Array.isArray(productData) ? productData : []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading products:', error);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-white">
      {!loading && products.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Məhsullar
            </h2>

            <div className="grid items-center grid-cols-3 gap-4">
              {products.slice(0, 8).map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg cursor-pointer"
                >
                  <div className="h-64 bg-white flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full cursor-pointer transition-transform duration-300 hover:scale-105 h-full object-contain"
                    />
                  </div>

                  <div className="flex justify-between items-center p-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                    </div>

                    <button
                      className="h-10 border rounded-2xl px-3 bg-gray-100"
                      onClick={() => {
                        dispatch(addToCart({
                          id: product.id,
                          title: product.title,
                          image: product.image,
                          price: product.price || 0,
                          quantity: 1, // Redux добавит 1 по умолчанию, но можно передать
                        }));
                        navigate("/cart"); // переходим в корзину
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <OccasionCarousel />
    </div>
  );
};

export default Home;
