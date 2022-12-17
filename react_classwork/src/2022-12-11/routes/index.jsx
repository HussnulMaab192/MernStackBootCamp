import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Register from "../login/Register";
import Post from "../post/Post";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
