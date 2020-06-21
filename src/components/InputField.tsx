import { Field } from "types/types";
import React from "react";
import { getLabelFromName } from "utils/string";

const InputField = (props: Field) => {
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

  const label = getLabelFromName(name);
  const requiredAsterix = required ? (
    <span style={{ color: "red" }}>*</span>
  ) : null;

  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ marginTop: 5, marginBottom: 5 }}>
        <label>
          {label}
          {requiredAsterix}
        </label>
      </div>
      <input
        id={name}
        onChange={handleChange}
        max={max}
        min={min}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </div>
  );
};

export default InputField;
