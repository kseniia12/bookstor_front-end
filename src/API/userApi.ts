import constant from "../lib/constants/constants";
import {
  IAxiosResponse,
  IFormInput,
  IGetUser,
  IPatchUser,
  IResponse,
  IResponsFormPassword,
} from "../lib/types/types";
import { axiosDefault } from "./axiosDefault";

export const axiosPostRegistrationUser = async ({
  email,
  password,
  fullName,
}: IFormInput): Promise<IAxiosResponse> => {
  const response = await axiosDefault.post<IAxiosResponse>(constant.SIGN_UP, {
    email,
    password,
    fullName,
  });
  return response.data;
};

export const axiosPostLoginUser = async ({
  email,
  password,
}: IFormInput): Promise<IAxiosResponse> => {
  const response = await axiosDefault.post<IAxiosResponse>(constant.SIGN_IN, {
    email,
    password,
  });
  return response.data;
};

export const axiosUpload = async ({
  photo,
}: {
  photo: File;
}): Promise<{
  photo: string;
}> => {
  const response = await axiosDefault.post<{
    photo: string;
  }>(
    constant.UPLOAD_USER_PHOTO,
    { picture: photo },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const axiosGetUser = async (): Promise<IResponse> => {
  const response = await axiosDefault.get<IResponse>(constant.GET_USER);
  return response.data;
};

export const axiosPatchUser = async ({
  user,
}: IGetUser): Promise<IPatchUser> => {
  const response = await axiosDefault.patch<IGetUser>(constant.GET_ME, {
    user,
  });
  return response.data;
};

export const axiosPatchUserPassword = async ({
  user,
}: IResponsFormPassword): Promise<{
  message: string;
}> => {
  const response = await axiosDefault.patch<{
    message: string;
  }>(constant.PASSWORD_CHANGE, { user });
  return response.data;
};
