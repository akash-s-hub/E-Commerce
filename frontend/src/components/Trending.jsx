import { useState, useEffect, useRef } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { FaChevronRight, FaRegHeart, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import config from "../../config";
import axios from "axios";

export default function Trending() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trending, setTrending] = useState([]);
  const timerRef = useRef(null); // Stores timer reference without triggering re-renders

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/api/products/trending`);
        setTrending(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  // ✅ **Auto-slide using `useRef()` instead of state dependency**
  useEffect(() => {
    if (!trending.length) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trending.length);
    }, 7000); // Set auto-slide every 7 secs

    return () => clearInterval(timerRef.current); // Cleanup timer
  }, [trending]); // Only runs once when trending loads

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === -1 && prevIndex === 0) return prevIndex; // Prevent loop back
      return (prevIndex + direction) % trending.length;
    });

    // ✅ Reset timer on user interaction without re-rendering the component
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trending.length);
    }, 7000); // Restart auto-slide timer after manual click
  };

  return (
    <section id="trending" className="relative w-full h-screen max-h-[30rem] bg-[#f8f8f8] overflow-hidden pt-20">
      <div className="absolute flex items-center justify-center h-full top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10 bg-transparent">
        <FaChevronLeft onClick={() => handleNavigation(-1)} className="text-3xl text-gray-700 hover:text-black" />
      </div>
      {trending.map((product, index) => (
        <div
          key={product._id}
          className={`absolute w-screen h-[80%] flex items-center justify-center text-black text-3xl transition-transform duration-700 ease-in-out`}
          style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
        >
          <div className="description pl-28 pr-10 flex flex-col flex-wrap items-start justify-center w-[60%] h-full gap-10">
            <div className="text-gray-600 text-lg font-medium">TRENDING NOW</div>
            <Link to={`/product/${product._id}`} className="text-3xl p-1 line-clamp-3 font-bold">
              {product.name}
            </Link>
            <div className="text-sm text-gray-600 line-clamp-2">{product.description}</div>
            <div className="flex items-center text-sm gap-4">
              {product.sales === product.stock ? (
                <span className="text-red-500 font-bold text-base">Out of Stock</span>
              ) : (
                <>
                  <button className="bg-blue-500 flex items-center justify-center text-sm h-full text-white p-2 rounded-md">
                    Buy Now
                  </button>
                  <button className="border border-blue-500 flex items-center justify-center text-sm h-10 w-10 text-blue-500 p-2 rounded-md">
                    <MdAddShoppingCart />
                  </button>
                </>
              )}
              <button className="ml-5 text-2xl text-red-600">
                <FaRegHeart />
              </button>
            </div>
          </div>
          <div className="image flex items-center justify-start w-[40%] h-full">
            <Link to={`/product/${product._id}`}>
              <img
                className="h-[400px] w-[400px] border border-black rounded-lg object-cover bg-center transform scale-90 transition-transform duration-300 hover:scale-95"
                src={product.images[0]}
                alt=""
              />
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute flex items-center justify-center h-full top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10 bg-transparent">
        <FaChevronRight onClick={() => handleNavigation(1)} className="text-3xl text-gray-700 hover:text-black" />
      </div>
    </section>
  );
}