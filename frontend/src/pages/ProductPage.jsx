import React, { useEffect, useState } from 'react'
import { Product, Review, Similar } from '../components'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

const ProductPage = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!productid) return;
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/api/products/get/${productid}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productid]);

  return (
    <>
      <Product product={product} />
      <Review product={product} />
      <Similar product={product} />
    </>
  )
}

export default ProductPage
