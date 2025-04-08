import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import config from "../../config";
import StarRating from "./StarRating";

const Popular = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${config.backendUrl}/api/products/popular`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full pb-6 px-6 rounded-lg mb-8">
      <h2 className="text-black text-xl font-semibold mb-4 text-center">Popular Products</h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No Popular Products available.</p>
      ) : (
        <div className="max-h-max w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white w-full h-max bg-center p-4 rounded-lg shadow flex flex-col items-center justify-center">
              <Link to={`/product/${product._id}`} className="w-full h-[200px] rounded-xl mb-4 bg-center">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={product.images[0]}
                  alt={product.name}
                />
              </Link>
              <Link to={`/product/${product._id}`} className="text-lg w-full font-semibold line-clamp-1">
                {product.name}
              </Link>
              <p className="text-gray-600 w-full text-xs line-clamp-2">{product.description}</p>
              <Link to={`/product/${product._id}`} className="flex items-center justify-start text-blue-600 w-full font-bold mt-2">
                ₹ {product.price}
              </Link>
              <div className="mt-2 w-full flex items-center justify-evenly">
                <StarRating rating={product.rating.average} />
                <div className="flex flex-col justify-center items-center w-full">
                  <span className="text-xs text-gray-500">{product.rating.average}</span>
                  <span className="text-xs text-gray-500">({product.rating.ratingCount})</span>
                </div>
              </div>
              <div className="w-full h-auto flex items-center justify-center gap-2 mt-4">
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div >
  );
};

export default Popular;