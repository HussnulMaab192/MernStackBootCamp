import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login/Login";
import Post from "../containers/MainApp/Post";
import PostDetails from "../containers/MainApp/PostDetails";
import SignUp from "../containers/SignUp/SignUp";

const AppRoutes = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Register" element={<SignUp />} />
            <Route path="/AssignmentForm" element={<AssignmentForm />} />
            <Route element={<Home />}>
              <Route path="/Home" element={<Home />} />
              <Route path="/WelcomeUser" element={<Welcome />} />
              <Route path="/Post" element={<Post />} />
              <Route path="/Show-Details/:id" element={<PostDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default AppRoutes;
