import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import Products from './components/Products'
import { Provider } from 'react-redux'
import { store } from './store'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </Provider>
      <Footer/> 
    </BrowserRouter>
  )
}

export default App
