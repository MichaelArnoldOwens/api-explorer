import { FieldObject } from "types/types";
import React from "react";

const InputField = (props: FieldObject) => {
  const {
    handleChange,
    max,
    min,
    name,
    placeholder,
    required,
    type,
    value,
  } = props;
  return (
    <input
      onChange={handleChange}
      max={max}
      min={min}
      name={name}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
    />
  );
};

export default InputField;
