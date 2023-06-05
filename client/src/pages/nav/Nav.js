import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../home/Home'
import About from '../about/About'
import Article from '../article/Article'
import Course from '../course/Course'
import Product from '../product/Product'
import Login from '../login/Login'
// import Registration from './pages/registration/Registration'
// import Nav from './pages/nav/Nav'
import Layout from "./Layout";
import './nav.css'



const Nav = () => {
  return (
    <>
      <section>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="article" element={<Article />} />
          <Route path="course" element={<Course />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
        
      </section>
    </>
  )
}

export default Nav

