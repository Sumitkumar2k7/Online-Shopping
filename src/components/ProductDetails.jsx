import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {
  const productSlice = useSelector((state) => state.productSlice)
  const navigate = useNavigate()

  useEffect(() => {
    if (!productSlice) {
      navigate("/")
    }
  }, [productSlice, navigate])

  if (!productSlice)
    return null

  return (
    <div className='bg-gray-200 min-h-screen flex'>
      <div className='bg-white rounded-lg my-12 w-10/12 sm:w-7/12 md:w-5/12 lg:w-4/12 mx-auto p-6 sm:p-8 flex flex-col items-center'>
        <img
          src={productSlice.image}
          className="w-full h-48 object-contain"
        />

        <h1 className='text-2xl sm:text-3xl font-bold mt-4'>{productSlice.title}</h1>
        <p className='text-gray-600 text-sm sm:text-base mt-2'>{productSlice.description}</p>
        <button className='bg-rose-500 text-white font-medium text-center py-4 rounded-lg w-full mt-5 active:scale-80 duration-300'>Buy now</button>
      </div>
    </div>
  )
}

export default ProductDetails
