export interface IPropsButton {
  text: string;
  className: string;
  onClick?: any;
}

export interface IPropsInput {
  register?: any;
  className?: string;
  placeholder?: string;
  icon?: string;
  value?: string;
  readOnly?: boolean;
}

export interface IFormInput {
  email?: string;
  password?: string;
  passwordReplay?: string | undefined;
  fullName?: string;
}

export interface IAxiosResponse {
  token: string;
  user: { id: number; fullName: string; email: string; photo?: string };
}

export interface IAxiosResponseGetUser {
  token: string | null;
  user: { id: number; fullName: string; email: string; photo?: string };
}

export interface IUser {
  id?: number;
  fullName: string;
  email: string;
  photo?: string;
}

export interface IUseweewer {
  photo: File;
}

export interface t {
  photo: string;
}

export interface IStateUser {
  user: IUser;
}

export interface IStateUserEror {
  message: string;
}

export interface IRouterProps {
  token?: string | null;
}

export interface IResponse {
  user: { id: number; fullName: string; email: string; photo: string };
}

export interface IAxiosRes {
  token: string | null | undefined;
}

export interface IResp {
  fullName: string;
  email: string;
}

export interface IGetUser {
  token: string | null;
  user: IResp;
}

export interface IRespwwww {
  user: IResp;
}

export interface IResponsForm {
  password: string;
  newPassword: string;
  passwordReplay?: string;
}

export interface IResponsFormPassword {
  token: string | null;
  user: IResponsForm;
}
