import { Field, FieldMap } from 'types/types';
import React, { ChangeEvent, useState } from 'react';

import InputField from 'components/InputField';
import styles from 'styles/ApiExplorer/ApiExplorerBody.module.css';

interface ApiExplorerBodyProps {
  fields: Array<Field>;
  handleSendRequest: (args: any) => void;
}

const ApiExplorerBody = (props: ApiExplorerBodyProps) => {
  const { fields, handleSendRequest } = props;
  const initialBody: FieldMap = fields
    ? fields.reduce((acc: FieldMap, curr: Field) => {
        acc[curr.name] = { value: '', isValid: curr.required ? false : true };
        return acc;
      }, {} as FieldMap)
    : ({} as FieldMap);
  const [body, setBody] = useState(initialBody);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e && e.target) {
      const { name, value } = e.target;
      const updatedField: FieldMap = {};
      updatedField[name] = { value, isValid: e.target.validity.valid };

      const newBody = { ...body, ...updatedField };
      setBody(newBody);
    }
  };
  const { submit } = styles;
  const inputFields = fields.map((field, index) => (
    <InputField
      key={index}
      handleChange={handleOnChange}
      value={body[field.name].value}
      isValid={body[field.name].isValid}
      {...field}
    />
  ));

  return (
    <form>
      {inputFields}
      <button
        className={submit}
        onClick={(e) => {
          e.preventDefault();
          handleSendRequest(body);
        }}
        disabled={!isValidForm(body)}
      >
        Send request
      </button>
    </form>
  );
};

// TODO: TEST ME
const isValidForm = (body: FieldMap) => {
  for (const key in body) {
    const obj = body[key];
    if (!obj.isValid) {
      return false;
    }
  }
  return true;
};

export default ApiExplorerBody;
