import React from 'react';
import { useSelector } from 'react-redux';
import './checkout.css'

const Checkout = () => {
    const { totalPrice, totalQuantities } = useSelector(state=>state)
  return (
    <div className='checkout_container'>
        <h1>Checkout</h1> 
        <h2><span>Total Quantity : { totalQuantities }</span>  </h2>
        <h2>Total Price : { totalPrice } </h2>
        </div>
  )
}

export default Checkout