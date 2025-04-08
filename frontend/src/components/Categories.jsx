import react, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import config from '../../config';

const Categories = () => {

  // const categories = [
  //   {
  //     id: 1,
  //     name: "electronics",
  //     image: "https://firebasestorage.googleapis.com/v0/b/docs-reader-store.appspot.com/o/categories%2FDnj3qp77emBnGP6mWepR?alt=media&token=ea6c4ab3-4584-4a7a-9a7c-54e87852492d"
  //   }, {
  //     id: 2,
  //     name: "laptop",
  //     image: "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg"
  //   }, {
  //     id: 3,
  //     name: "mobile",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s"
  //   }, {
  //     id: 4,
  //     name: "watch",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLm6gVmofEbnsdXAEQmj-2C08QqibKsFEQw&s"
  //   }, {
  //     id: 5,
  //     name: "clothes",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulg5IiSiyXUypJ5CXDZqgbdwBqoYFkfOJOw&s"
  //   }
  // ]

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`${config.backendUrl}/api/products/categories`);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);


  return (
    <section id='categories' className='w-full h-full bg-white pt-5 pb-20 px-20 flex flex-col justify-center items-center gap-8'>
      <div>
        <h2 className='text-black text-xl font-semibold'>Shop by Category</h2>
      </div>
      <div className='scroller w-full flex justify-start items-center overflow-scroll flex-nowrap gap-10'>
        {categories.map((category, index) => (
          <Link to={`/category/${category.name}`} key={index} className='flex flex-col items-center justify-center px-2 gap-4'>
            <div className='group h-32 w-32 flex justify-center items-center rounded-full border border-gray-400 cursor-pointer'>
              <img className='h-[100%] w-[100%] object-cover rounded-full bg-center transform scale-95 transition-transform duration-300 group-hover:scale-100' src={category.image} alt={category.name} />
            </div>
            <div className='text-black text-sm uppercase text-center font-semibold'>{category.name}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
