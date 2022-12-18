import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Register from "../login/Register";
import Post from "../post/Post";
import PostDetails from "../post/PostDetails";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/PostDetails/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
