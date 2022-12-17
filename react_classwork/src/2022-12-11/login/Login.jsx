import { Alert } from "bootstrap";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  google,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "../../services/Firebase_Configue/index.js";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = await signInWithEmailAndPassword(
      auth,
      state.email,
      state.password
    );
    if (user) {
      navigate("/Post");
    } else {
      Alert("something wrong!!");
    }
  };
  const handlGoogleLogin = async (event) => {
    event.preventDefault();
    const userGoogle = await signInWithPopup(auth, google);
    console.log(userGoogle);
    if (userGoogle) {
      navigate("/Post");
    } else {
      Alert("something wrong!!");
    }
  };

  return (
    <>
      <div class="container">
        <h1 className="text-center my-3">Login Form</h1>
        <div className="col-md-4 offset-4">
          <form onSubmit={handleLogin}>
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
                  setState({ ...state, email: e.target.value });
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
                  setState({ ...state, password: e.target.value });
                }}
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              onClick={handlGoogleLogin}
              class="btn btn-primary"
            >
              sign In With Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
