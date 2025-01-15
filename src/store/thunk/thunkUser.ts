import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAxiosResponse, IFormInput, IResponse, IRouterProps, IUseweewer, t } from '../../lib/typing';
import { axiosGetUser, axiosPostLoginUser, axiosPostRegistrationUser, axiosUpload } from '../../API/authApi';

export const thunkCreateUser = createAsyncThunk<IAxiosResponse, IFormInput>(
  'users/createUser',
  async ({
    email,
    password,
    fullName
  }: IFormInput): Promise<IAxiosResponse> => {
    const response = await axiosPostRegistrationUser({
      email,
      password,
      fullName,
    });
    localStorage.setItem('token', response.token);
    return response;
  }
);

export const thunkLoginUser = createAsyncThunk<IAxiosResponse, IFormInput>(
  'users/loginUser',
  async ({
    email,
    password,
  }: IFormInput): Promise<IAxiosResponse> => {
    const response = await axiosPostLoginUser({
      email,
      password,
    });
    localStorage.setItem('token', response.token);
    return response;
  }
);

export const thunkUploadPhoto = createAsyncThunk<t, IUseweewer>(
  'users/upload',
  async ({
    photo
  }: IUseweewer): Promise<t> => {
    const response = await axiosUpload({
      photo
    });
    return response;
  }
);

export const thunkGetUser = createAsyncThunk<IResponse, IRouterProps>(
  'users/dUser',
  async ({
    token,
  }: IRouterProps): Promise<IResponse> => {
    const response = await axiosGetUser({
      token,
    });
    return response;
  }
);