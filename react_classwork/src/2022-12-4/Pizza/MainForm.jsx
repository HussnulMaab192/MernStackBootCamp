import React from "react";
import { useState } from "react";
import TableOutput from "./TableOutput";
import TextInput from "./TextInput";

const MainForm = () => {
  const [order, setOrder] = useState("");
  const [pendingOrder, setPendingOrder] = useState("");
  const [CompletedOrder, setCompletd] = useState("");
  const [wholeArray, setWholeArray] = useState([]);
  const handleAddClick = (event) => {
    console.log("handeAddclik");
    var data = [order, pendingOrder, CompletedOrder];
    setWholeArray((dataa) => {
      return [...dataa, { data }];
    });
    // setWholeArray(order, pendingOrder, CompletedOrder);
  };
  return (
    <div>
      Hi,Coder
      <br />
      <TextInput
        placeholder="Order"
        onChange={(params) => setOrder(params)}
        value={order}
      />
      <TextInput
        placeholder="Pending Order"
        onChange={(params) => setPendingOrder(params)}
        value={pendingOrder}
      />
      <br />
      <TextInput
        placeholder="Completed Order"
        onChange={(params) => setCompletd(params)}
        value={CompletedOrder}
      />
      <br />
      <input type="submit" onClick={() => handleAddClick()} />
      <br />
      <br />
      <TableOutput myArr={wholeArray} />
    </div>
  );
};

export default MainForm;
