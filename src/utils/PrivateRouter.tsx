import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { IRouterProps } from "../lib/types/types";
import constant from "../lib/constants/constants";

const PrivateRouter: React.FC<IRouterProps> = () => {
  const user = useAppSelector((state) => state.users.user);
  return user.id !== 0 ? <Outlet /> : <Navigate to={`${constant.SIGN_IN}`} />;
};

export default PrivateRouter;
