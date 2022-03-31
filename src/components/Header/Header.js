import React from 'react';
import './header.css';
import { BsFillBagFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
      <img className='img' src="/images/logo1.webp" />
      </Link>
      
      <Link to="/cart">
        <div className="basket">

          <BsFillBagFill className="cart-icon" />
          <span>4</span>

        </div>
      </Link>
    </div>
  )
}

export default Header