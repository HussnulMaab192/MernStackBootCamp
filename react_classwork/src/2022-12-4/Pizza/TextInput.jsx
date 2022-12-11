import React from "react";

const TextInput = ({ placeholder, onChange, value }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      value={value}
    />
  );
};

export default TextInput;
