import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const base_uri = "/api";
const instance = axios.create({
  baseURL: base_uri,
});

function fetch<T = any, D = any, E = any>(
  options: AxiosRequestConfig<D>
): Promise<AxiosResponse<T, E>> {
  return instance(options);
}

export default fetch;
