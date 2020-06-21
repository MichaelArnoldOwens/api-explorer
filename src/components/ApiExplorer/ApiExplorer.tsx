import { ApiExplorerProps } from "types/types";
import Body from "./ApiExporerBody";
import React from "react";
import Response from "./ApiExplorerResonse";
import styles from "styles/ApiExplorer/ApiExplorer.module.css";

const ApiExplorer = (props: ApiExplorerProps) => {
  const { container } = styles;
  const { body, method, title, url } = props;
  console.log(styles);
  return (
    <div className={container}>
      <h2>{title}</h2>
      <div style={{ color: "red", fontWeight: 250 }}>{method}</div>
      <h3>Base URL</h3>
      <div>{url}</div>
      <h3>Body</h3>
      <Body fields={body} />
      <Response />
    </div>
  );
};

export default ApiExplorer;
