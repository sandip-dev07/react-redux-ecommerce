import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from "react-router-dom";
import Cart from './pages/cart/Cart';
import NotFound from './pages/notFound/NotFound';
import ProductDetails from './pages/prodDetails/ProductDetails';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SearchResult from './pages/searchResult/SearchResult';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='/search/' element={<SearchResult/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
