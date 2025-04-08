import React, { useContext, useEffect, useState } from 'react';
import StarRating from './StarRating';
import { FaRegHeart } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const [image, setImage] = useState()
  function handleImage(image) {
    setImage(image)
  }

  return (
    <div className="pt-16 h-max w-full overflow-hidden">
      {product ? (
        <div className="flex h-full w-full">
          {/* Image Section */}
          <div className="w-[40%] h-full flex justify-center items-center flex-col">
            <img
              className=" h-[350px] w-[350px] rounded-lg object-cover bg-center transform scale-90 transition-transform duration-300 hover:scale-95"
              src={image || product.images[0]}
              alt={product.name}
            />
            <div className="h-20 w-[90%] flex justify-center items-center gap-4">
              {product.images.slice(0, 4).map((image, index) => (
                <img
                  onClick={() => (handleImage(image))}
                  key={index}
                  src={image}
                  alt=""
                  className="h-[80px] w-[80px] border border-black rounded-md object-cover"
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="scroller w-[60%] h-full overflow-y-auto px-6 pr-12 py-4">
            <div className="mb-4 flex flex-wrap gap-2 text-xs">
              {product.category.slice(0, 2).map((category, index) => (
                <Link key={index} to={`/category/${category}`}>
                  <button
                    className="border border-gray-400 px-4 py-1 rounded-2xl"
                  >
                    {category}
                  </button>
                </Link>
              ))}
              <Link to={`/brand/${product.brand}`}>
                <button className="border border-gray-400 px-4 py-1 rounded-2xl">
                  {product.brand}
                </button>
              </Link>
            </div>

            <h1 className="text-2xl font-bold mb-5">{product.name}</h1>
            <div className="font-semibold text-xl mb-1 text-green-500">
              ₹ {product.price}
            </div>
            <div className="text-black text-sm mb-2">
              MRP:{' '}
              <span className="line-through">
                ₹ {(product.price * 1.1).toFixed(2)}
              </span>
            </div>
            <div className="w-full flex items-center justify-start mb-5">
              <div className='w-max'>
                <StarRating rating={product.rating.average} />
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="text-sm text-gray-700">{product.rating.average}</span>
                <span className="text-xs text-gray-500">({product.rating.ratingCount})</span>
              </div>
            </div>

            <div className="flex items-center text-sm gap-4 mb-8">
              {product.sales == product.stock ?
                <span className="text-red-500 font-bold text-base">Out of Stock</span> :
                <>
                  <button className="bg-blue-500 flex items-center justify-center text-sm h-full text-white p-2 rounded-md">
                    Buy Now
                  </button>
                  <button className="border border-blue-500 flex items-center justify-center text-sm h-full text-blue-500 p-2 rounded-md">
                    <MdAddShoppingCart />
                  </button>
                </>
              }
              <button className="ml-5 text-2xl text-red-600">
                <FaRegHeart />
              </button>
            </div>

            <div>
              <span className="font-bold text-base">About this Item</span>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center w-full">Error Fetching Product</h1>
      )}
    </div>
  );
};

export default Product;
