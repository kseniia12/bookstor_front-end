import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { IRouterProps } from "../lib/types/types";
import constant from "../lib/constants/constants";

const PrivateRouter: React.FC<IRouterProps> = () => {
  const user = useAppSelector((state) => state.users.user);
  if (!user) {
    return <Navigate to={`${constant.SIGN_IN}`} />;
  }
  return <Outlet />;
};

export default PrivateRouter;
