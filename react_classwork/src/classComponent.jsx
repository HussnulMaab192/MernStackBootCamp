import React from "react";
class Classcomponent extends React.Component { 
  render() {
    return (
      <>
        This is class Component
        <p>{this.props.text}</p>
      </>
    );
  }
}

export default Classcomponent;
