import { AxiosResponse, AxiosRequestHeaders } from "axios";
import { api } from "./api";

const headers: AxiosRequestHeaders = {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  "Access-Control-Allow-Headers": "Content-Type",
};

const getAllUsers = async <T>(): Promise<AxiosResponse<T>> => {
  return api.get<T>(`/api/user/2`, { headers });
};

const getFile = async <T>(): Promise<AxiosResponse<T>> => {
  return api.get<T>(`/api/user/2`, { headers });
};

export { getAllUsers };
