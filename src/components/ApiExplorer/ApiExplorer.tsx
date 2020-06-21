import { Field, FieldMap, HttpMethods } from 'types/types';
import React, { useState } from 'react';

import Body from './ApiExporerBody';
import Response from './ApiExplorerResonse';
import { isEmpty } from 'utils/object';
import styles from 'styles/ApiExplorer/ApiExplorer.module.css';

interface RequestBody {
  [index: string]: string;
}

interface ApiExplorerProps {
  title: string;
  url: string;
  method: HttpMethods | string;
  body?: Array<Field>;
}

const ApiExplorer = (props: ApiExplorerProps) => {
  const [response, setResponse] = useState('');
  const { container } = styles;
  const { body, method, title, url } = props;

  const handleSendRequest = (inputs: FieldMap) => {
    const options: RequestInit = {
      method,
      cache: 'no-cache',
    };
    if (!isEmpty(inputs)) {
      const requestBody = buildRequestBody(inputs);
      options.body = JSON.stringify(requestBody);
    }

    fetch(url, options)
      .then((r) => {
        const contentType = r.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          return r.json().then((json) => {
            setResponse(JSON.stringify(json, undefined, 2));
          });
        } else {
          return r.text().then((text) => {
            setResponse(JSON.stringify(text));
          });
        }
      })
      .catch((e) => setResponse(`ERROR: ${JSON.stringify(e)}`));
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

// TODO: TEST ME
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
