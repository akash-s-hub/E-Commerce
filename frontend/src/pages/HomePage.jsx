import React from 'react'
import { Trending, Brands, Categories, Popular, ProductsContainer } from "../components"

const HomePage = () => {
  return (
    <>
      <Trending />
      <Brands />
      <Categories />
      <Popular />
      <ProductsContainer />
    </>
  )
}

export default HomePage
