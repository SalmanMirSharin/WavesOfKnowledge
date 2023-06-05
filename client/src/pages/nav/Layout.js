import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
<section>
<nav>

    <div className='logo'>waves of knowledge</div>

<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link  to="/about">About</Link>
  </li>
  <li>
    <Link  to="/article">Article</Link>
  </li>
  <li>
    <Link  to="/course">Course</Link>
  </li>
  <li>
    <Link  to="/product">Product</Link>
  </li>
  <li>
    <Link  to="/login">Login</Link>
  </li>
</ul>
</nav>

<Outlet />

</section>
    </>
  )
}

export default Layout


