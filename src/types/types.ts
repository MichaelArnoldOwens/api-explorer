
export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface FieldObject {
  name: string;
  type: string;
  max?: number;
  min?: number;
  placeholder?: string;
  required?: boolean;
}
export interface ApiExplorerProps {
  title: string;
  url: string;
  method: HttpMethods;
  body: Array<FieldObject>;
}
