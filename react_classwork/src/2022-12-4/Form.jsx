import React, { useState } from "react";
import Propmp from "./propmp";
import TextField from "./textField";

const FormData = () => {
  const [userName, setUser] = useState("");
  const [name, setDev] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [feedback, setFeedback] = useState("");
  const [radioState, setRadioState] = useState("NO");
  const [btn, setBtn] = useState(false);

  function onChangeValue(event) {
    setRadioState(event.target.value);
  }
  const handleClick = () => {
    setBtn(true);
  };
  return (
    <>
      {btn === false ? (
        <div>
          Form
          <br />
          <TextField
            placeholder="Dev Name"
            onChange={(params) => setUser(params)}
            value={userName}
          />
          <br />
          <TextField
            placeholder="User Name"
            onChange={(params) => setDev(params)}
            value={name}
          />{" "}
          <br />
          <TextField
            placeholder="Email"
            onChange={(params) => setEmail(params)}
            value={email}
          />{" "}
          <br />
          <TextField
            placeholder="Password"
            onChange={(params) => setPassword(params)}
            value={password}
          />
          <br />
          <TextField
            placeholder="Address"
            onChange={(params) => setAddress(params)}
            value={address}
          />
          <br />
          <TextField
            placeholder="Feedback"
            onChange={(params) => setFeedback(params)}
            value={feedback}
          />
          {/* //  radio Button */}
          <div onChange={onChangeValue}>
            <label> Satisfied </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                No
              </label>
            </div>{" "}
            <br />
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Yes
              </label>
            </div>
          </div>
          <button onClick={() => handleClick()}> Submit</button>
        </div>
      ) : (
        <Propmp username={userName} devname={name} password={password} />
      )}
    </>
  );
};

export default FormData;
