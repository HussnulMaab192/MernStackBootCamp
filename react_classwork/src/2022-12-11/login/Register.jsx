import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../../services/Firebase_Configue/index.js";

const Register = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    const user = await createUserWithEmailAndPassword(
      auth,
      state.email,
      state.password
    );
    if (user) {
      navigate("/login");
    } else {
      alert("hamza kashmiriiiiiiii");
    }
  };

  return (
    <div>
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
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
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
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Sign In
        </button>
        <button type="submit" class="btn btn-primary">
          sign In With Google
        </button>
      </form>
    </div>
  );
};

export default Register;
