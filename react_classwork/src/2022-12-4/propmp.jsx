import React from "react";

const Propmp = (props) => {
  const [username, devname, password] = props;
  return (
    <div>
      propmp
      <h1>Thanks for your Feedback</h1>
      <h3> Username : {username}</h3>
      <h3> Dev name : {devname}</h3>
      <h3> Password : {password}</h3>
    </div>
  );
};

export default Propmp;
