import { PropsWithChildren, useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { getUserThunk } from "../store/thunk/thunkUser";

const InitializationProject: React.FC<PropsWithChildren> = ({ children }) => {
  const [initialization, setInitialization] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const initialize = async () => {
      if (!token) {
        setInitialization(true);
      }
      try {
        dispatch(getUserThunk());
      } catch (error) {
        console.error("Initialization failed:", error);
      } finally {
        setInitialization(true);
      }
    };
    initialize();
  }, [dispatch]);

  if (!initialization) {
    return null;
  }
  return <>{children}</>;
};

export default InitializationProject;
