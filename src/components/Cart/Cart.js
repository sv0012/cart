import React from 'react'
import { useSelector } from 'react-redux';
import './cart.css'
import CartProd from '../CartProd/CartProd';
import Checkout from '../Checkout/Checkout';
import SaveForLater from '../SaveForLater/SaveForLater';


const Cart = () => {
  const { products } = useSelector(state => state)

  return (
    <>
    <div className='checkout'> 
    <div className="cart_prod">
    {products.length>0 ? 
      products.map(prod => (
        <CartProd prod={prod} />
      )) : <h1>Cart is Empty</h1>
    }
    </div>
    
    {
    products.length>0 ? <Checkout /> : null
      
    }
    

    </div>
   
   
    <SaveForLater />
    </>
    

  )
}

export default Cart