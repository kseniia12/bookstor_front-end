export interface IPropsButton {
  text?: string;
  className?: string;
  onClick?: any;
  form?: any;
}

export interface IPropsInput {
  register?: any;
  className?: string;
  placeholder?: string;
  icon?: string;
  value?: string;
  readOnly?: boolean;
  type: string;
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
  ratingBook: IRateBook
}

export interface IPatchUser {
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
  user: IResponsForm;
}

export interface IBook {
  id: string;
  name: string;
  priceSoft: number;
  priceHard: number;
  description: string;
  cover: string;
  countHard: number;
  countSoft: number;
  bestseller: boolean;
  author: Author;
}

interface Author {
  id: number;
  name: string;
}

export interface IResponsBook {
  book: { [key: string]: IBook };
  price: {
    minValue: number;
    maxValue: number;
  }
}


export interface IResponsRecommendations {
  book: { [key: string]: IBook };
}


export interface ICartSlice {
  book: { [key: string]: IBook };
  totalPrice: number;
}

export interface Price {
  minValue: number;
  maxValue: number;
}

export interface IFilter {
  id: number;
  name: string;
}

export interface IResponsFilter {
  filter: IFilter[];
}

export interface IReqBook {
  page?: number;
  filter?: string[];
}

export interface IAddBookToCart {
  bookId: number; 
  count?: number;
}

export interface IGetBookToCart {
  book: IBook[]; 
  totalPrice: number;
}

export interface IDeleteBookToCart {
  status: string;
}

export interface IReqDeleteBookToCart {
  id: number;
}

export interface IGenRecommendations {
  bookId: number;
}

export interface IRateBook {
  bookId: number;
  rate: number;
}
