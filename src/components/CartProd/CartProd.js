import React from 'react';
import './CartProd.css';
import { BsFillCaretDownFill, BsFillCaretUpFill, BsTrashFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
const CartProd = ({ prod }) => {
    const { title, size, imageUrl, brand, category, price, quantity } = prod;
    const dispatch = useDispatch();
    return (
        <div className="cart_container">
            <div className='card'>
            <img className='productImage' src={imageUrl} />
            <ul>
                <li className='productTitle'>{title}</li>
                <li className='productBrand'>{brand}</li>
                <li className="productCategory">{category}</li>
                <li className="productSize">{size}</li>
                <li className="productPrice">{price}&#8377;</li>
            </ul>
        </div>
        <div className="quantities">
        <span onClick={()=>dispatch({type:'INC',payload:prod.id})} >  <BsFillCaretUpFill className='inc' /></span>
      
        <span className='qty'>{quantity}</span>
        <span onClick={()=>dispatch({type:'DEC',payload:prod.id})} ><BsFillCaretDownFill className="dec"/></span>
        
        </div>
        <div className="remove">
            <span>Remove Item <BsTrashFill onClick={()=>dispatch({type:'REMOVE',payload:prod.id})} /></span>
        </div>
        <div className="save">
            <button className='btn' onClick={()=>dispatch({type:'SAVE_FOR_LATER',payload:prod.id})}>Save For Later</button>
        </div>
        </div>
        
    )
}

export default CartProd