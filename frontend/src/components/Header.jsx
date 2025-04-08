import React, { useContext } from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import ProductContext from "../context/Product/ProductContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { handleSearch, searchQuery, setSearchQuery } = useContext(ProductContext)
  const navigate = useNavigate();

  const onSearch = (e) => {
    handleSearch(e, navigate);
  };


  return (
    <>
      <ToastContainer />
      <header className="fixed z-20 top-0 left-0 bg-white/50 backdrop-blur-2xl border-b-2 w-full h-16 text-black py-4 px-16 flex justify-center items-center gap-40">
        <div className="">Store</div>
        <div className="bg-slate-200 w-1/2 h-3/4 py-5 px-2 flex items-center justify-start rounded-md">
          <form className="w-full flex items-center justify-start" onSubmit={onSearch}>
            <button type="submit" className="px-2 py-2 w-auto">
              <FaSearch className="text-black" />
            </button>
            <input
              className="bg-slate-200 text-black text-sm w-full px-2 py-2 border-none outline-none"
              type="text"
              placeholder="Search your favourite product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="flex gap-8">
          <FaRegUserCircle className="cursor-pointer text-xl" />
          <IoCartOutline className="cursor-pointer text-xl" />
        </div>
      </header>
    </>


  );
};

export default Header;