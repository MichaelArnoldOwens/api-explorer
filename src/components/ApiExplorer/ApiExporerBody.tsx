import { FieldObject } from "types/types";
import InputField from "components/InputField";
import React from "react";
import styles from "styles/ApiExplorer/ApiExplorerBody.module.css";

interface ApiExplorerBodyProps {
  fields: Array<FieldObject>;
}

const ApiExplorerBody = (props: ApiExplorerBodyProps) => {
  const { fields } = props;
  const { submit } = styles;
  const inputFields = fields.map((field) => <InputField {...field} />);

  return (
    <form>
      {inputFields}
      <button className={submit}>Send request</button>
    </form>
  );
};

export default ApiExplorerBody;
