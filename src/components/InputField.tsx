import { Field } from "types/types";
import React from "react";
import { getLabelFromName } from "utils/string";
import styles from "styles/InputField.module.css";
interface InputFieldProps extends Field {
  isValid: boolean;
}

const InputField = (props: InputFieldProps) => {
  const {
    handleChange,
    isValid,
    max,
    min,
    name,
    pattern,
    placeholder,
    required,
    type,
    value,
  } = props;
  const { error } = styles;

  const label = getLabelFromName(name);
  const requiredAsterix = required ? (
    <span style={{ color: "red" }}>*</span>
  ) : null;

  const errorMessage = pattern ? (
    <div className={error}>{`Expected input to have pattern /${pattern}/`}</div>
  ) : required ? (
    <div className={error}>Required Field</div>
  ) : null;

  const invalidMessage = isValid ? null : errorMessage;

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
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
      {invalidMessage}
    </div>
  );
};

export default InputField;
