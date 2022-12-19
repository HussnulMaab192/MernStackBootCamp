import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React_query_package from "../components/common/React_query_package";
// import React_query_package from "../components/common/React_query_package";
// import React_query_package from "../components/common/react_quer_package";
import Home from "../containers/Home";
import Login from "../containers/Login/Login";
import AssignmentForm from "../containers/MainApp/AssignmentForm";
// import AssignmentForm from "../containers/MainApp/AssignmentForm";
import Post from "../containers/MainApp/Post";
import PostDetails from "../containers/MainApp/PostDetails";
import SignUp from "../containers/SignUp/SignUp";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<SignUp />} />
        <Route path="/AssignmentForm" element={<AssignmentForm />} />
        <Route element={<Home />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/ReactQueryPacket" element={<React_query_package />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Show-Details/:id" element={<PostDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
