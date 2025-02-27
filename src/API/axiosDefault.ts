import axios from "axios";
import { toast } from "react-toastify";
import constant from "../lib/constants/constants";
import { IToken } from "../lib/types/types";

const errorHandler = (error: {
  response: { status: number; data: { detail: any } };
}) => {
  if (error.response.status === 500) {
    toast.error(`${error.response.data.detail}`, {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  }
  return Promise.reject({ ...error });
};

export const axiosDefault = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosDefault.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 || 403) {
      const refresh = localStorage.getItem("refresh");
      if (!refresh) {
        return;
      }
      const newTokens = await axiosDefault.post<IToken>(
        constant.REFRESH_TOKEN,
        { refresh: refresh }
      );
      localStorage.setItem("token", newTokens.data.accessToken);
      localStorage.setItem("refresh", newTokens.data.refreshToken);
      const token = newTokens.data.accessToken;
      originalRequest.headers["Authorization"] = `Bearer ${token}`;

      return axiosDefault(originalRequest);
    }

    return errorHandler(error);
  }
);

axiosDefault.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
