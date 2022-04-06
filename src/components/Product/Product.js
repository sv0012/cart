import React from 'react';
import { useDispatch } from 'react-redux';
import './product.css'

const Product = ({ prod, save }) => {
    const { title, size, imageUrl, brand, category, price, quantity } = prod;
    const dispatch = useDispatch();
    return (
        <div className='card'>
            <img className='productImage' src={imageUrl} />
            <ul>
                <li  className='productTitle'>{title}</li>
                <li className='productBrand'>{brand}</li>
                <li className="productCategory">{category}</li>          
                <li className="productSize">{size}</li>
                <li  className="productPrice">{price}&#8377;</li>
            </ul>
            <button className='btn' onClick={()=>dispatch(save ? {type:'MOVE_TO_CART',payload:prod.id } : {type:'ADD_TO_CART',payload:{prod,  quantity} })}>{save ? 'Move to Cart' : 'Add To Cart'}</button>
        </div>
    )
}

export default Product