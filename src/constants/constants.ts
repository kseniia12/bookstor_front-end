const constantForAxios = {
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  GET_ME: "/users/me",
  HOME_PAGE: "/home",
  UPLOAD: "/users/upload",
  UP: "/home/g",
  PASS: "/users/password",
} as const;

export default constantForAxios;