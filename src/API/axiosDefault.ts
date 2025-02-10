import axios from "axios";
import { toast } from "react-toastify";

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
  (error) => errorHandler(error)
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
