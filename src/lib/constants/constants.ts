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
  FILTER: "/book/filter",
  BOOK_PAGE: "/book/:id",
  CART: "/cart",
  COMMENT: "/comment",
  RECOMMENDATIONS: "/book/recommendations",
  RATE_BOOK: "/book/rating",
  FAVORITES: "/favorites",

} as const;

export default constant;