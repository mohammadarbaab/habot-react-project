import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import Hero from './components/Hero/Hero'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import DashYt from './components/Dashboard/DashYt/DashYt.jsx'
import SupplierFind from './components/Pages/SupplierFind/SupplierFind.jsx'
import BuyersPost from './components/Pages/BuyersPost/BuyersPost.jsx'
import Footer from './components/Pages/Footer/Footer.jsx'

function App() {
  const videoId = 'D-MPOcj-CfY';
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard />
      <DashYt videoId={videoId} />
      <SupplierFind />
      <BuyersPost />
      <Footer />
    </div>
  )
}

export default App
