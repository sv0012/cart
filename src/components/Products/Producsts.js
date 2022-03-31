import React from 'react'
import products from '../../data.json'
import Product from '../Product/Product';
import './products.css'
const Products = () => {
  const prods = products;
  console.log(prods)
  return (
    <div className='container'>
      {
        prods.map((prod) => (
          <Product key={prod.id} prod={prod} />
        ))

      }
  
    

    </div>

  )
}

export default Products