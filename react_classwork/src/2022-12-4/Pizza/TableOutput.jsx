import { useState } from "react";

const TableOutput = (data) => {
  const [Array, setArray] = useState([]);
  const { myArr } = data;
  setArray();

  console.log("tableContent:", Array);
  return <div></div>;
};

export default TableOutput;
