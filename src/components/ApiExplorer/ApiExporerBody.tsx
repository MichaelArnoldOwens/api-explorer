import React, { ChangeEvent, useState } from "react";

import { Field } from "types/types";
import InputField from "components/InputField";
import styles from "styles/ApiExplorer/ApiExplorerBody.module.css";

interface ApiExplorerBodyProps {
  fields: Array<Field>;
  onSendRequest: (args: any) => void;
}

interface FieldMap {
  [index: string]: string;
}

const ApiExplorerBody = (props: ApiExplorerBodyProps) => {
  const { fields } = props;
  const initialBody: FieldMap = fields
    ? fields.reduce((acc: FieldMap, curr: Field) => {
        acc[curr.name] = "";
        return acc;
      }, {} as FieldMap)
    : ({} as FieldMap);
  const [body, setBody] = useState(initialBody);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e && e.target) {
      const { name, value } = e.target;
      const updatedField: FieldMap = {};
      updatedField[name] = value;
      const newBody = { ...body, ...updatedField };
      setBody(newBody);
    }
  };
  const { submit } = styles;
  const inputFields = fields.map((field, index) => (
    <InputField
      key={index}
      handleChange={handleOnChange}
      value={body[field.name]}
      {...field}
    />
  ));

  return (
    <form>
      {inputFields}
      <button className={submit}>Send request</button>
    </form>
  );
};

export default ApiExplorerBody;
