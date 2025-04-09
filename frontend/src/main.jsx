import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AddProductsPage, BrandsPage, CategoriesPage, NotFoundPage, HomePage, ProductPage, SearchPage, LoginPage, SignupPage } from "./pages"
import { Layout, LayoutNoHeader } from "./layout/index.js"
import AllContext from './context/AllContext.jsx'

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="product/:productid" element={<ProductPage />} />
        <Route path="brand/:brand" element={<BrandsPage />} />
        <Route path="category/:category" element={<CategoriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route element={<LayoutNoHeader />}>
        <Route path="addproduct" element={<AddProductsPage />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <AllContext>
    {/* <StrictMode> */}
    <RouterProvider router={router}></RouterProvider>
    {/* </StrictMode> */}
  </AllContext>
);
