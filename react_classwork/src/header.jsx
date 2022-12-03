import React from "react";
import Nav from "./nav";

const Header = (props) => {
  const { text, age } = props;
  return (
    <>
      <div>Hello header</div>
      <p>{text}</p>
      <p>{age}</p>
      <Nav />
    </>
  );
};

export default Header;
