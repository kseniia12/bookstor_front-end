import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { IRouterProps } from "../lib/typing";
import constant from "../constants/constants";

const PrivateRouter: React.FC<IRouterProps> = () => {
  const user = useAppSelector((state) => state.users.user);
  return user ? <Outlet /> : <Navigate to={`${constant.SIGN_IN}`} />;
};

export default PrivateRouter;
