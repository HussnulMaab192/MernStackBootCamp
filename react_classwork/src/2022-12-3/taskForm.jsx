import { useState } from "react";

const TaskForm = () => {
  const [inputs, setInputs] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Form Details</h1>
      <input
        type="text"
        name="devName"
        placeholder="Developer Name"
        value={inputs.devName || ""}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="userName"
        placeholder="User Name"
        value={inputs.userName || ""}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={inputs.email || ""}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={inputs.password || ""}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="address"
        placeholder="Adress"
        value={inputs.address || ""}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <textarea
        type="text"
        name="feedback"
        placeholder="FeedBack"
        value={inputs.feedback || ""}
        onChange={handleChange}
      />

      <div>
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
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Yes
          </label>
        </div>
      </div>
      <input type="submit" />
    </form>
  );
};

export default TaskForm;
