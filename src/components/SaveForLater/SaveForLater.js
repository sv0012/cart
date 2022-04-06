import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product/Product';
import './saveforlater.css'

const SaveForLater = () => {
  const { saveForLater } = useSelector(state => state);
  return (
    <>
      {saveForLater.length > 0 ? <h1>Saved Products</h1> : null}
      <div className='save_container'>

        {
          saveForLater.map((prod) => (
            <Product prod={prod} save />
          ))
        }
      </div>
    </>



  )
}

export default SaveForLater