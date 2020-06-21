import React from 'react';
import styles from 'styles/ApiExplorer/ApiExplorerResponse.module.css';

const ApiExplorerResponse = (props: any) => {
  const { container } = styles;
  return <pre className={container}>{props.response}</pre>;
};

export default ApiExplorerResponse;
