import React from 'react';
import styles from 'styles/ApiExplorer/ApiExplorerResponse.module.css';

// TODO: type properly
const ApiExplorerResponse = (props: any) => {
  const { response } = props;
  const { container } = styles;
  return <pre className={container}>{response}</pre>;
};

export default ApiExplorerResponse;
