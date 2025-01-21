const constantForAxios = {
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  GET_ME: "/users/me",
  HOME_PAGE: "/home",
  UPLOAD_USER_PHOTO: "/users/upload",
  GET_USER: "/home/get",
  PASSWORD_CHANGE: "/users/password",
} as const;

export default constantForAxios;