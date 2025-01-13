export interface IPropsButton {
  text: string;
  className: string;
  onClick?: any;
}

export interface IPropsInput {
  register?: any;
  className?: string;
  placeholder: string;
  icon?: string;
}

export interface IFormInput {
  email: string;
  password: string;
  passwordReplay?: string | undefined;
  fullName?: string;
}

export interface IAxiosResponse {
  token: string;
  user: { id: number; fullName: string; email: string };
}

export interface IUser {
  id: number;
  fullName: string;
  email: string;
}

export interface IStateUser {
  user: IUser;
}

export interface IRouterProps {
  token?: string | null;
}



