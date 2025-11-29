import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-white p-8">
      <h1 className="text-4xl font-bold mb-6">Корзина</h1>

      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-4 rounded-lg">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div className="flex-1 px-4">
                <h2 className="font-bold">{item.title}</h2>
                <p>Количество: {item.quantity}</p>
                <p>Цена: ${item.price}</p>
              </div>
              <p className="font-bold">${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
