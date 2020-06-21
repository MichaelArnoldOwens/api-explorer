import ApiExplorer from 'components/ApiExplorer/ApiExplorer';
import React from 'react';
import styles from 'styles/App.module.css';

const defaultData2: any = {
  title: 'Get users',
  url: 'https://jsonplaceholder.typicode.com/users',
  method: 'GET',
};

const defaultData = {
  title: 'Add new user',
  url: 'https://jsonplaceholder.typicode.com/users',
  method: 'POST', // NOTE: this endpoint is not documented in jsonplaceholder, but it works!
  body: [
    {
      name: 'email',
      type: 'email',
      max: 24,
      min: 3,
    },
    {
      name: 'full-name',
      type: 'text',
      placeholder: 'John Doe',
      required: true,
    },
    {
      name: 'phone',
      type: 'tel',
      pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
    },
  ],
};

function App() {
  const { title, url, method, body } = defaultData;
  const { App } = styles;

  return (
    <div className={App}>
      <ApiExplorer title={title} url={url} method={method} body={body} />
      <ApiExplorer
        title={defaultData2.title}
        url={defaultData2.url}
        method={defaultData2.method}
        body={defaultData2.body}
      />
    </div>
  );
}

export default App;
