import React from 'react';
import './product.css'

const Product = ({ prod }) => {
    const { title, size, imageUrl, brand, category, price } = prod;
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
            <button className='btn'>Add To Cart</button>
        </div>
    )
}

export default Product