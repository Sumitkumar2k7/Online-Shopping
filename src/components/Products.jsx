import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../slices/productSlice'
import { useDispatch } from 'react-redux'

const Products = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fetchData = async ()=>{
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response.data)
    setProducts(response.data)
  }

  useEffect(()=>{
    fetchData()
  }, [])

  const openProduct = (item)=>{
    dispatch(addProduct(item))
    navigate("/product-details")
  }

  return (
    <div className='bg-gray-200 min-h-screen pt-20'>
      <h1 className='text-4xl font-bold text-center'>Online Shopping</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-10/12 mx-auto py-12'>
        {
          products.map((item, index)=>(
            <div key={index} className='bg-white rounded-xl p-6 shadow'>
              <img src={item.image} className='w-full h-[150px] object-cover'/>
              <h1 className='text-base font-semibold mt-3'>{item.title}</h1>
              <p className='text-sm text-gray-600 mt-1'>{item.description.slice(0,20)}...</p>
              <h1>₹{item.price}</h1>
              <button onClick={()=>openProduct(item)} className='bg-green-500 text-white font-medium py-3 rounded-lg w-full active:scale-80 duration-300 mt-4'>View Details</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products
