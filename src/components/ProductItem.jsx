/* eslint-disable react/prop-types */ 
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/carts/actions';
import { removeQuantity } from '../redux/products/action';

const ProductItem = ({product}) => {
    const {id, imgUrl, name, category, price, quantity, description} = product;
    const dispatch =useDispatch()
    const handleAddToCart = () => {
       dispatch(addToCart(product))
       dispatch(removeQuantity(id))

    }
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
  <figure className='relative'>
    <img src={imgUrl} alt="Shoes" className='h-80 w-full' />
    <div className="badge badge-secondary absolute top-3 right-3 font-semibold">{category}</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description} </p>
    <div className='flex justify-center'>
        <p className='w-full'>Available: {quantity}</p>
        <p className='text-left'>${price}</p>
    </div>
    <div className="card-actions mt-2">
      <button className="btn btn-sm btn-primary text-white" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  </div>
</div>
  )
}

export default ProductItem