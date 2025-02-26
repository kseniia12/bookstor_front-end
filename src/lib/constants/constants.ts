const constant = {
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  GET_ME: "/users/me",
  HOME_PAGE: "/users",
  UPLOAD_USER_PHOTO: "/users/avatar",
  GET_USER: "/users/me",
  PASSWORD_CHANGE: "/users/password",
  CATALOG_BOOKS: "/",
  GET_BOOK: "/books/",
  GET_BOOK_ID: "/books/id",
  FILTER: "/books/filter",
  BOOK_PAGE: "/books/:id",
  CART: "/cart-items",
  COMMENT: "/comments",
  RECOMMENDATIONS: "/books/recommendations",
  RATE_BOOK: "/books/rating",
  FAVORITES: "/favorites",
  PATH_TO_FOLDER: "http://localhost:4000/upload/",
} as const;

export default constant;
