import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("books")));

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main" element={<Main data={data} setData={setData} />} />
      <Route path="/cart" element={<Cart data={data} setData={setData} />} />
    </Routes>
  );
};

export default App;
