import React from "react";
import { useState } from "react";
const Form = () => {
  const [email, setState] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (params, val) => {
    if (val === 2) setName(params.target.value);
    if (val === 3) setAge(params.target.value);
  };

  //   const handleName = (params) => {
  //     setName(params.target.value);
  //   };
  //   const handleAge = (params) => {
  //     setAge(params.target.value);
  //   };
  const handleClick = () => {
    alert(email + "   " + name + "  " + age);
  };

  return (
    <>
      <h1>UserForm</h1>
      <input
        placeholder="email"
        onChange={(event) => setState(event.target.value)}
      />
      <br />
      <input
        placeholder="name"
        onChange={(event, val) => handleChange(event, 2)}
      />
      <br />
      <input
        placeholder="age"
        onChange={(event, val) => handleChange(event, 3)}
      />
      <br />
      <button onClick={() => handleClick()}>Click me</button>
    </>
  );
};

export default Form;
