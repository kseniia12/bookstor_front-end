import constantForAxios from "../constants/constants";
import { IAxiosResponse, IFormInput } from "../lib/typing";
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