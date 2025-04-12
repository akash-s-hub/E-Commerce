import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config';
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { TbXboxX } from "react-icons/tb";
import { Link } from 'react-router-dom';
import CartContext from '../context/Cart/CartContext';

const CartPage = () => {

  const { loading, cart, handleIncrement, handleDecrement, handleRemove } = useContext(CartContext);

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-7xl mx-auto my-8 pt-10 md:mt-10 px-10 md:px-16 bg-[#f8f8f8] h-max overflow-hidden">
      <h1 className="text-center font-bold text-2xl mb-4">YOUR CART</h1>

      {loading ? (
        <div className="w-full h-[200px] flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : cart.length === 0 ? (
        <p className="text-center text-gray-600 my-5">No Products Added</p>
      ) : (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {cart.map((product, index) => (
              <div key={index} className="relative w-full flex items-center flex-col md:flex-row gap-4 p-4 bg-white shadow rounded-md">
                <TbXboxX
                  className='absolute top-1 right-1 text-lg cursor-pointer text-red-600'
                  onClick={() => { handleRemove(index) }} />
                <div className='h-full'>
                  <img className='h-20 w-20 object-cover rounded-md' src={product.images[0]} alt={product.name} />
                </div>
                <div className='h-full w-auto'>
                  <div className='text-lg md:text-xl lg:text-lg font-bold mb-1'>{product.name}</div>
                  <div className='flex justify-start items-center gap-2 text-base font-bold mb-1 text-green-600'>
                    ₹ {product.price}
                    <span className='text-gray-500 font-normal text-end text-xs line-through'>₹ {(product.price * 1.1).toFixed(0)}</span>
                  </div>
                  <div className='flex items-center justify-start gap-5'>
                    <button
                      className="text-2xl"
                      onClick={() => handleDecrement(index)}
                    >
                      <CiSquareMinus />
                    </button>
                    <div className="text-lg">{product.quantity}</div>
                    <button
                      className="text-2xl"
                      onClick={() => handleIncrement(index)}
                    >
                      <CiSquarePlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to={'/checkout'}>
            <button className='mt-4 rounded-md bg-blue-500 hover:bg-blue-600 w-max p-2 px-4'>
              Checkout
            </button>
          </Link>
        </>

      )}
    </div>
  );
};

export default CartPage;