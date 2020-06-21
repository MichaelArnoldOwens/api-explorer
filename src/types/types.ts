import { ChangeEvent } from "react";

export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface Field {
  name: string;
  type: string;
  max?: number;
  min?: number;
  placeholder?: string;
  required?: boolean;
  value?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ApiExplorerProps {
  title: string;
  url: string;
  method: HttpMethods;
  body: Array<Field>;
}
