import React from 'react';
import styles from '@/styles/App.module.css';

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

interface BodyObject {
  name: string;
  type: string;
  max?: number;
  min?: number;
  placeholder?: string;
  required?: boolean;
}

interface ApiExplorerProps {
  title: string;
  url: string;
  method: HttpMethods;
  body: Array<BodyObject>;
}

const ApiExplorer = (props: ApiExplorerProps) => {
  return (
    <div>
      
    </div>
  )
}

export default ApiExplorer;