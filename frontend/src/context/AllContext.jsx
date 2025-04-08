import React from 'react';
import ProductContextProvider from './Product/ProductContextProvider.jsx';
import AddProductContextProvider from './AddProduct/AddProductContextProvider.jsx';

const AllContext = ({ children }) => {
  return (
    <AddProductContextProvider>
      <ProductContextProvider>
        {children}
      </ProductContextProvider>
    </AddProductContextProvider >
  );
};

export default AllContext;