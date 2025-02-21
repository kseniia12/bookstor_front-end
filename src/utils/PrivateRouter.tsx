import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { IRouterProps } from "../lib/types/types";
import constant from "../lib/constants/constants";

const PrivateRouter: React.FC<IRouterProps> = () => {
  const user = useAppSelector((state) => state.users.user);
  if (user !== null) {
    return <Outlet />;
  } else {
    return <Navigate to={`${constant.SIGN_IN}`} />
  }
};

export default PrivateRouter;
