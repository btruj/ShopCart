import React from 'react'
import AddProduct from './AddProduct'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const Home = () => {
    const products = useSelector((state) => state.products)
   
  return (
    <main className='max-w-7xl mx-auto py-8 px-4'>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-8'>
        <div className='col-span-2'>
            <div className='grid md:grid-cols-2 justify-between items-start gap-y-10'>
            {
                products.length > 0 ? (products.map((p, i) => <ProductItem key={i} product={p}/>)) : <div className='font-semibold' >No Product Found</div>
            }
            </div>
            </div>
        <div><AddProduct/></div>
        </div>
    </main>
  )
}

export default Home