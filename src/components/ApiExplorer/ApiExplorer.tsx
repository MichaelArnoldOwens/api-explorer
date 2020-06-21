import { ApiExplorerProps, FieldMap } from 'types/types';
import React, { useState } from 'react';

import Body from './ApiExporerBody';
import Response from './ApiExplorerResonse';
import styles from 'styles/ApiExplorer/ApiExplorer.module.css';

interface RequestBody {
  [index: string]: string;
}

const ApiExplorer = (props: ApiExplorerProps) => {
  const [response, setResponse] = useState('');
  const { container } = styles;
  const { body, method, title, url } = props;

  const handleSendRequest = (inputs: FieldMap) => {
    const requestBody = buildRequestBody(inputs);
    fetch(url, {
      method,
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(requestBody),
    })
      .then((r) => r.json())
      .then((json) => setResponse(JSON.stringify(json)))
      .catch((e) => setResponse(JSON.stringify(e)));
  };

  return (
    <div className={container}>
      <h2>{title}</h2>
      <div style={{ color: 'red', fontWeight: 250 }}>{method}</div>
      <h3>Base URL</h3>
      <div>{url}</div>
      <h3>Body</h3>
      <Body fields={body} handleSendRequest={handleSendRequest} />
      <Response response={response} />
    </div>
  );
};

// TODO: test
const buildRequestBody = (inputs: FieldMap): RequestBody => {
  let body: { [index: string]: string } = {};
  for (let key in inputs) {
    const fieldObj = inputs[key];
    const { isValid, value } = fieldObj;
    if (isValid) {
      body[key] = value;
    }
  }
  return body;
};

export default ApiExplorer;
