  // import React, { useState } from "react";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import Login from "./Login.jsx";
import Register from "./Register";
import Cakes from "./Cakes";
import Cupcakes from "./cupcakes";
import FlowersCandles from "./flowers and candle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Order from "./Order";
import OrderDetails from "./Orderdetails";
import CartPage from "./CartPage";
import Header from "./Header";
import About from "./About";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>  
      <Routes>
 
        <Route path="/" element={<Home/>}/>

      

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cakes" element={<Cakes/>}/>
        <Route path="/cupcakes" element={<Cupcakes/>}/>
        <Route path="/candle" element={<FlowersCandles/>}/>
        <Route path="/order/:id" element={<Order/>}/>
        <Route path="/orderdetails" element={<OrderDetails/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/>
        </Routes>
    </>
  );
}
export default App
