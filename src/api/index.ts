import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  withCredentials: true
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(config => {
  // console.log(config,12313);
  return config;
});
