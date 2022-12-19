import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  google,
  facebook,
} from "../Services/firebase-config";

function LoginForm() {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  const HandleShow = async (event) => {
    event.preventDefault();
    const user = await signInWithEmailAndPassword(
      auth,
      state.email,
      state.password
    );
    if (user) {
      navigate(`/Post`);
    }
    // console.log("qwerty", user);
  };

  const HandleGoogle = async () => {
    const user1 = await signInWithPopup(auth, google);
    if (user1) {
      navigate(`/Post`);
    }
  };

  const HandleFacebook = async () => {
    const user2 = await signInWithPopup(auth, facebook);
    if (user2) {
      navigate(`/Post`);
    }
  };
  return (
    <>
      <div class="container">
        <h1 className="text-center my-2">Login Form</h1>
        <div className="row my-5">
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1671276240~exp=1671276840~hmac=e25e1638c32f995079da5088f9f9d199096e13fdc6c560a658cb8e65eb9282a2"
              class="img-fluid"
              alt="login data"
            />
          </div>
          <div className="col-md-6">
            <form onSubmit={HandleShow}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setstate({ ...state, email: e.target.value });
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    setstate({ ...state, password: e.target.value });
                  }}
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Login
              </button>
              <br />
              <br />
              <button
                type="button"
                onClick={HandleGoogle}
                class="btn btn-primary"
              >
                SignIn With Google
              </button>
              <br />
              <br />
              <button
                type="button"
                onClick={HandleFacebook}
                class="btn btn-primary"
              >
                SignIn With Facebook
              </button>
              <br />
              <br />
              <Link to="/Register">
                <button className="btn btn-outline-success">
                  Create New Account
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
