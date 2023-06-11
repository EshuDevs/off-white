import './App.css'
import Hero from './components/Hero'
import Shop from './components/Shop'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { PRODUCTS } from './components/products'
import { ShopContextProvider } from './context/shop-context'



function App() {

  const[open, setOpen] = useState(false)



  return (
    <ShopContextProvider>
        <Navbar open={open} setOpen={setOpen}/>
        <Sidebar open={open} setOpen={setOpen} products={PRODUCTS}/>
        <Hero/>
        <Shop products={PRODUCTS}/>
    </ShopContextProvider>
  )
}

export default App
