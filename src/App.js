import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Dashboard from "./components/Dashboard/Dashboard";
import DashYt from "./components/Dashboard/DashYt/DashYt";
import SupplierFind from "./components/Pages/SupplierFind/SupplierFind";
import BuyersPost from "./components/Pages/BuyersPost/BuyersPost";
import Footer from "./components/Pages/Footer/Footer";
import Signup from "./components/Auth/Signup/Signup";
import Login from "./components/Auth/Signin/Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<DefaultRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

function DefaultRoutes() {
  const videoId = "D-MPOcj-CfY";
  return (
    <>
      <Hero />
      <Dashboard />
      <DashYt videoId={videoId} />
      <SupplierFind />
      <BuyersPost />
      <Footer />
    </>
  );
}

export default App;
