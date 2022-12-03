import React from "react";

const Child = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};

export default Child;
