import React from 'react'
import products from '../../data.json'
import Product from '../Product/Product';
import './products.css'
const Products = () => {
  const prods = products;
  return (
    <div className='container '>
      {
        prods.map((prod) => (
          <Product className='save_container' key={prod.id} prod={prod} />
        ))

      }
  
    

    </div>

  )
}

export default Products