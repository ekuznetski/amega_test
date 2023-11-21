import axios, { AxiosRequestConfig } from "axios";

type RequestType = "get" | "post";

export async function request<T>(
  url: string,
  type: RequestType = "get",
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> {
  let response;

  if (type === "get") {
    response = await axios.get<T>(url, config);
  } else if (type === "post") {
    response = await axios.post<T>(url, data, config);
  } else {
    throw new Error(`Unsupported request type: ${type}`);
  }

  return response.data;
}
