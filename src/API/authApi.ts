import constantForAxios from "../constants/constants";
import { IAxiosResponse, IFormInput } from "../typing";
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
 