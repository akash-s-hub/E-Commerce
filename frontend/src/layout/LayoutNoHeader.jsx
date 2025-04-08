import React from 'react'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { ScrollToTop } from "./index.js"

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout