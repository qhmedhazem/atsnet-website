import axios, { AxiosRequestConfig } from "axios";

const base_uri = "https://www.atsnet.net/api/v1";
const instance = axios.create({
  baseURL: base_uri,
});

const fetch = (options: AxiosRequestConfig<any>) => {
  return instance(options);
};

export default fetch;
