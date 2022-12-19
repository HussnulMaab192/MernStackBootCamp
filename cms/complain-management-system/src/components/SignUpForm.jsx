import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../Services/firebase-config";

const SignUpForm = () => {
  const [State, setState] = useState({
    email: "",
    username: "",
    Password: "",
    Confirmpassword: "",
  });
  const navigate = useNavigate();
  const HandleSignUp = async (event) => {
    event.preventDefault();
    if (State.Password === State.Confirmpassword) {
      const user = await createUserWithEmailAndPassword(
        auth,
        State.email,
        State.Password
      );
      if (user) {
        navigate(`/login`);
      }
    } else {
      console.log("Password not matched...");
    }
  };
  return (
    <>
      <div class="container">
        <h1 className="text-center my-3">Register</h1>
        <div className="col-md-4 offset-4">
          <form onSubmit={HandleSignUp}>
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
                  setState({ ...State, email: e.target.value });
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setState({ ...State, username: e.target.value });
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
                  setState({ ...State, Password: e.target.value });
                }}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  setState({ ...State, Confirmpassword: e.target.value });
                }}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Register User
            </button>
            <br />
            <Link to="/login">
              <button className="btn btn-outline-success">
                Already have an account!
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
