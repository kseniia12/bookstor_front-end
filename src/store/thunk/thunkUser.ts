import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAxiosResponse,
  IFormInput,
  IGetUser,
  IPatchUser,
  IResponse,
  IResponsFormPassword,
  IRouterProps,
  IStateUser,
  IStateUserEror,
  IUseweewer,
  t,
} from "../../lib/typing";
import {
  axiosGetUser,
  axiosPatchUser,
  axiosPatchUserPassword,
  axiosPostLoginUser,
  axiosPostRegistrationUser,
  axiosUpload,
} from "../../API/authApi";

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

export const uploadPhotoThunk = createAsyncThunk<t, IUseweewer>(
  "users/upload",
  async ({ photo }: IUseweewer): Promise<t> => {
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
  IStateUserEror,
  IResponsFormPassword
>(
  "users/getUserPassword",
  async ({ user }: IResponsFormPassword): Promise<IStateUserEror> => {
    const response = await axiosPatchUserPassword({
      user,
    });
    return response;
  }
);
