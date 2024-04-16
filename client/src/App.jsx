import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Components/pages/home/Home";
import SignUp from "./SignUp";
import { Toaster } from "react-hot-toast";
import NavbarF from "./Components/Navbar/Navbar";
import Cart from "./Components/pages/cart/Cart";
import placeOrder from "./Components/pages/placeOrder/placeOrder";
import Admin from "./Components/AdminDashboard/admin"

function App() {
  return (
    <div className="app">
      <NavbarF />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/order" element={<placeOrder />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>


    </div>
  );
}

export default App;
