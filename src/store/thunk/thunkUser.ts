import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAxiosResponse, IFormInput } from '../../lib/typing';
import { axiosPostLoginUser, axiosPostRegistrationUser } from '../../API/authApi';

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