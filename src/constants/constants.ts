const constant = {
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  GET_ME: "/users/me",
  HOME_PAGE: "/home",
  UPLOAD_USER_PHOTO: "/users/upload",
  GET_USER: "/home/me",
  PASSWORD_CHANGE: "/users/password",
  CATALOG_BOOKS: "/catalog",
  GET_BOOK: "/book/pagination",
  GET_FILTER: "/book/filter",
} as const;

export default constant;