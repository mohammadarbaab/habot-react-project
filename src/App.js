import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import Hero from './components/Hero/Hero'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import DashYt from './components/Dashboard/DashYt/DashYt.jsx'

function App() {
  const videoId = 'D-MPOcj-CfY';
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard />
      <DashYt videoId={videoId} />
    </div>
  )
}

export default App
