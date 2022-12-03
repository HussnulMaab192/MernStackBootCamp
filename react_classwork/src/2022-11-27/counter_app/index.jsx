import React from "react";
import { useState } from "react";

// React main state kabhi bhi directly modify nai hoti
// React main state kabhi bhi directly modify nai hoti
// React main state kabhi bhi directly modify nai hoti
// React main state kabhi bhi directly modify nai hoti mean =kar ka assign nai kar sakty

//[count]= useState(0);// 0 is the initial value here !
// useState is just like a container mean variable it takes the initial state!
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleResetClick = () => {
    setCount(0);
  };
  const handleDecrementClick = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    // onchage is  event handler hai jo input py ham use karty hain
    // onMouserEnter and onMouseLeave these are also EventHandler
    <>
      <h1>{count <= 0 ? "zero" : count}</h1>
      <button onClick={() => handleClick()}>+</button>
      <button onClick={() => handleResetClick()}>Reset</button>
      <button onClick={() => handleDecrementClick()}>-</button>
    </>
  );
};

export default Counter;
