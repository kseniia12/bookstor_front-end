import constantForAxios from "../constants/constants";
import { IAxiosRes, IAxiosResponse, IFormInput, IResponse, IUseweewer, t } from "../lib/typing";
import { axiosDefault } from "./axiosDefault";

export const axiosPostRegistrationUser = async ({
  email,
  password,
  fullName
}: IFormInput): Promise<IAxiosResponse> => {
  const response = await axiosDefault.post<IAxiosResponse>(constantForAxios.SIGN_UP, {
    email,
    password,
    fullName
  });
  return response.data;
};

export const axiosPostLoginUser = async ({ email, password }: IFormInput): Promise<IAxiosResponse> => {
  const response = await axiosDefault.post<IAxiosResponse>(constantForAxios.SIGN_IN, {
    email,
    password,
  });
  return response.data;
};

export const axiosUpload = async ({ photo }: IUseweewer): Promise<t> => {
  const response = await axiosDefault.post<t>(constantForAxios.UPLOAD, {picture: photo}, {
    
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const axiosGetUser = async ({ token }: IAxiosRes): Promise<IResponse> => {
  const response = await axiosDefault.get<IResponse>(constantForAxios.UP,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  );
  return response.data;
};