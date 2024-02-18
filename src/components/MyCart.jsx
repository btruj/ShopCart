import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import Billing from './Billing';

const MyCart = () => {
    const carts = useSelector((state) => state.carts);

  return (
    <div className='py-8 max-w-7xl container mx-auto px-4'>
        <h2 className='mb-5 text-xl font-bold'>MyCart</h2>
        <div className='flex flex-col md:flex-row justify-between md:gap-8 gap-4'>
            <div className='space-y-6 md:w-2/3'>
                {
                    carts.length ? (carts.map((p) => <CartItem product={p} key={p.id}/>)) : <p>No Product in cart</p> 
                }
            </div>
            <div className='md: w-1/3'><Billing/></div>
        </div>
    </div>
  )
}

export default MyCart