export interface IFormInput {
  email?: string;
  password?: string;
  passwordReplay?: string | undefined;
  fullName?: string;
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
}

export interface IAxiosResponse {
  token: IToken;
  user: { id: number; fullName: string; email: string; photo?: string };
}

export interface IAxiosResponseGetUser {
  token: string | null;
  user: { id: number; fullName: string; email: string; photo?: string };
}

export interface IRateBook {
  bookId: number;
  rate: number;
}

export interface IUser {
  id?: number;
  fullName: string;
  email: string;
  photo?: string;
}

export interface IStateUser {
  user: IUser | null;
  ratingBook: { [key: string]: IRateBook };
}

export interface IPatchUser {
  user: IUser;
}

export interface IRouterProps {
  token?: string | null;
}

export interface IResponse {
  user: { id: number; fullName: string; email: string; photo: string };
  ratingBook: IRateBook[];
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
  author: IAuthor;
  averageRating: number;
  count?: number;
}

interface IAuthor {
  id: number;
  name: string;
}

export interface IPrice {
  minValue: number;
  maxValue: number;
}

export interface IFilters {
  genre: string[];
  maxPrice: string;
  minPrice: string;
  page: string;
  sort: string;
}

export interface IMeta {
  totalBooks: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface IRateBookUser {
  [key: string]: {
    bookId: number;
    rate: number;
  };
}
export interface IResponsBook {
  bookNormalized: { [key: string]: IBook };
  books: IBook[];
  price: IPrice | null;
  meta: IMeta | null;
  filters: IFilters | null;
}

export interface IResponsBookPagination {
  book: IBook[];
  price: IPrice;
  meta: IMeta;
  filters: IFilters;
}

export interface IResponsRecommendations {
  book: { [key: string]: IBook };
}

export interface ICartSlice {
  books: { [key: string]: IBook };
  totalPrice: number;
}

export interface IFilter {
  id: number;
  name: string;
}

export interface IResponsFilter {
  filter: IFilter[];
}

export interface IReqBook {
  page?: string;
  genre?: string[];
  sort: string | null,
  maxPrice: string | null,
  minPrice: string | null,
}

export interface IAddBookToCart {
  bookId: string;
  count?: number;
}

export interface IGetBookToCart {
  book: IBook[];
  totalPrice: number;
}

export interface IPropsComment {
  comment: string;
  date: object;
  bookId: number;
}

export interface IComment {
  id: string;
  comment: string;
  date: string;
  user: { fullName: string; photo: string };
}
