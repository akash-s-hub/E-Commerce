import React, { useEffect, useState } from 'react'
import CartContext from './CartContext'
import axios from 'axios';
import config from '../../../config';

const CartContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (cart.length > 0) return;
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${config.backendUrl}/api/products/popular`);
        const updatedCart = data.map(product => ({ ...product, quantity: 1 }));
        setCart(updatedCart);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleIncrement = (index) => {
    setCart(prevCart =>
      prevCart.map((product, i) => i === index
        ? { ...product, quantity: product.quantity + 1 }
        : product))
  };

  const handleDecrement = (index) => {
    setCart(prevCart =>
      prevCart.map((product, i) => i === index && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product))
  };

  const handleRemove = (index) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  }

  return (
    <CartContext.Provider value={{ loading, cart, handleIncrement, handleDecrement, handleRemove }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
