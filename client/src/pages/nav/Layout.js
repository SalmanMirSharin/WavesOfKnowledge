import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'

const Layout = () => {
  const [isShow, setIsShow] = useState(false);
  const [menu, setMenu] = useState(false)

  return (
    <>
      <section>
        <nav>
          <div className="logo">waves of knowledge</div>

          <ul className={menu ? 'nav_menu active':'nav_menu'}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/article">Article</Link>
            </li>
            <li>
              <Link to="/course">Course</Link>
            </li>
            <li>
              <Link onClick={() => setIsShow((pre) => !pre)}>Product</Link>
              {isShow && <DropDownMenu/>}
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Outlet />

        <div className="menu">
          <GiHamburgerMenu onClick={()=>{setMenu(!menu)}} />
        </div>

        {/* <div>
          <GiHamburgerMenu/>
        </div> */}
      </section>
    </>
  );
};

export default Layout;

export const DropDownMenu = () => {
  return (
    <>
      <ul className="sub-nav sub-nav-transi">
        <li>
          <Link to="/product-buy">Product-Buy</Link>
        </li>
        <li>
          <Link to="/product-rent">Product-Rent</Link>
        </li>
      </ul>


    </>
  );
};
