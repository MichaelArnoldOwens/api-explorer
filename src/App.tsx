import ApiExplorer from "./components/ApiExplorer/ApiExplorer";
import { HttpMethods } from "./types/types";
import React from "react";
import styles from "./styles/App.module.css";

const defaultData = {
  title: "Add new user",
  url: "https://jsonplaceholder.typicode.com/users",
  method: HttpMethods.POST,
  body: [
    {
      name: "email",
      type: "email",
      max: 24,
      min: 3,
    },
    {
      name: "full-name",
      type: "text",
      placeholder: "John Doe",
      required: true,
    },
    {
      name: "phone",
      type: "tel",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    },
  ],
};

function App() {
  const { title, url, method, body } = defaultData;
  const { App } = styles;

  return (
    <div className={App}>
      <ApiExplorer title={title} url={url} method={method} body={body} />
    </div>
  );
}

export default App;
