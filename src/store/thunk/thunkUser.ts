import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAxiosResponse,
  IFormInput,
  IGetUser,
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

export const thunkCreateUser = createAsyncThunk<IAxiosResponse, IFormInput>(
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

export const thunkLoginUser = createAsyncThunk<IAxiosResponse, IFormInput>(
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

export const thunkUploadPhoto = createAsyncThunk<t, IUseweewer>(
  "users/upload",
  async ({ photo }: IUseweewer): Promise<t> => {
    const response = await axiosUpload({
      photo,
    });
    return response;
  }
);

export const thunkGetUser = createAsyncThunk<IResponse, IRouterProps>(
  "users/dUser",
  async ({ token }: IRouterProps): Promise<IResponse> => {
    const response = await axiosGetUser({
      token,
    });
    return response;
  }
);

export const thunkPatchUser = createAsyncThunk<IStateUser, IGetUser>(
  "users/getUser",
  async ({ token, user }: IGetUser): Promise<IStateUser> => {
    const response = await axiosPatchUser({
      token,
      user,
    });
    return response;
  }
);

export const thunkPatchUserPassword = createAsyncThunk<
  IStateUserEror,
  IResponsFormPassword
>(
  "users/getUserPassword",
  async ({ token, user }: IResponsFormPassword): Promise<IStateUserEror> => {
    const response = await axiosPatchUserPassword({
      token,
      user,
    });
    return response;
  }
);
