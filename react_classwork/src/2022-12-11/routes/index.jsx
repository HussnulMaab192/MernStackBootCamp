import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Register from "../login/Register";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
