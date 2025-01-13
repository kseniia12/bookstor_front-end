export interface PropsButton {
  text: string;
  className: string;
}

export interface PropsInput {
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
  user: { id: number; fullName: string; email: string};
}

export interface IUser {
  id: number;
  fullName: string;
  email: string;
}

export interface IStateUser {
  user: IUser;
}

// export interface Form {
//   placeholder: string;
//   icon: string;
//   label?: string;
// }

// export interface PropsCustomForm {
//   fields: Form[];

//   title?: string;
// }


