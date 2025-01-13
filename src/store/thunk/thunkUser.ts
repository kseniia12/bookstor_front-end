import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAxiosResponse, IFormInput } from '../../typing';
import { axiosPostRegistrationUser } from '../../API/authApi';


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