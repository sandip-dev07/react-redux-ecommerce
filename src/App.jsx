import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from "react-router-dom";
import Cart from './pages/cart/Cart';
import NotFound from './pages/notFound/NotFound';
import ProductDetails from './pages/prodDetails/ProductDetails';
import { useNavigate, createSearchParams } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>

    </>
  )
}

export default App
