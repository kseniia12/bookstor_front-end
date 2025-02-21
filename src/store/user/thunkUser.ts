import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAxiosResponse,
  IFormInput,
  IGetUser,
  IPatchUser,
  IResponse,
  IResponsFormPassword,
} from "../../lib/types/types";
import {
  axiosGetUser,
  axiosPatchUser,
  axiosPatchUserPassword,
  axiosPostLoginUser,
  axiosPostRegistrationUser,
  axiosUpload,
} from "../../API/userApi";

export const createUserThunk = createAsyncThunk<IAxiosResponse, IFormInput>(
  "users/createUser",
  async ({
    email,
    password,
    fullName,
  }: IFormInput): Promise<IAxiosResponse> => {
    const response = await axiosPostRegistrationUser({
      email,
      password,
      fullName,
    });
    localStorage.setItem("token", response.token);
    return response;
  }
);

export const loginUserThunk = createAsyncThunk<IAxiosResponse, IFormInput>(
  "users/loginUser",
  async ({ email, password }: IFormInput): Promise<IAxiosResponse> => {
    const response = await axiosPostLoginUser({
      email,
      password,
    });
    localStorage.setItem("token", response.token);
    return response;
  }
);

export const uploadPhotoThunk = createAsyncThunk<
  {
    photo: string;
  },
  {
    photo: File;
  }
>(
  "users/upload",
  async ({
    photo,
  }: {
    photo: File;
  }): Promise<{
    photo: string;
  }> => {
    const response = await axiosUpload({
      photo,
    });
    return response;
  }
);

export const getUserThunk = createAsyncThunk<IResponse>(
  "users/dUser",
  async (): Promise<IResponse> => {
    const response = await axiosGetUser();
    return response;
  }
);

export const patchUserThunk = createAsyncThunk<IPatchUser, IGetUser>(
  "users/getUser",
  async ({ user }: IGetUser): Promise<IPatchUser> => {
    const response = await axiosPatchUser({
      user,
    });
    return response;
  }
);

export const patchUserPasswordThunk = createAsyncThunk<
  {
    message: string;
  },
  IResponsFormPassword
>(
  "users/getUserPassword",
  async ({
    user,
  }: IResponsFormPassword): Promise<{
    message: string;
  }> => {
    const response = await axiosPatchUserPassword({
      user,
    });
    return response;
  }
);
