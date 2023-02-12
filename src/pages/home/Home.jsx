import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import ProductList from '../../components/productList/ProductList'
import Footer from '../../components/footer/Footer'
import NewsLetter from '../../components/brands&newsletter/NewsLetter'
import './home.scss'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ProductList/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Home