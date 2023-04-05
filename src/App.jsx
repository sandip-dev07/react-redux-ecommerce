import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes, useLocation } from "react-router-dom";
import Cart from './pages/cart/Cart';
import NotFound from './pages/notFound/NotFound';
import ProductDetails from './pages/prodDetails/ProductDetails';
import SearchResult from './pages/searchResult/SearchResult';
import CategoryResult from './pages/categoryResult/CategoryResult';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import LoginPage from './pages/authPage/LoginPage';
import RegisterPage from './pages/authPage/RegisterPage';

const App = () => {
  const { pathname } = useLocation();

  const showNavbarAndFooter = !['/login', '/register'].includes(pathname);

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/search/' element={<SearchResult />} />
        <Route path='/category/:category' element={<CategoryResult />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </>
  )
}

export default App
