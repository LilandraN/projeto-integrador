import { AxiosResponse, AxiosRequestHeaders } from "axios";
import { api } from "./api";

const headers: AxiosRequestHeaders = {
  "Content-Type": "application/json;charset=utf-8",
};

const postUser = async <T>(user: any): Promise<AxiosResponse<T>> => {
  return api.post<T>(`/api/user/all`, user, { headers });
};

export { postUser };
