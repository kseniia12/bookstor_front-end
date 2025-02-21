const constant = {
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  GET_ME: "/users/me",
  HOME_PAGE: "/users",
  UPLOAD_USER_PHOTO: "/users/upload",
  GET_USER: "/users/me",
  PASSWORD_CHANGE: "/users/password",
  CATALOG_BOOKS: "/",
  GET_BOOK: "/book/pagination",
  GET_BOOK_ID: "/book/id",
  FILTER: "/book/filter",
  BOOK_PAGE: "/book/:id",
  CART: "/cart",
  COMMENT: "/comment",
  RECOMMENDATIONS: "/book/recommendations",
  RATE_BOOK: "/book/rating",
  FAVORITES: "/favorites",
  PATH_TO_FOLDER: "http://localhost:4000/upload/",
} as const;

export default constant;
