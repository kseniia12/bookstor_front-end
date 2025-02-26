import { PropsWithChildren, useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { getUserThunk } from "../store/user/thunkUser";
import { getBookToFavoritesThunk } from "../store/favorites/thunkFavorites";
import { getBookToCartThunk } from "../store/cart/thunkCart";

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
       await dispatch(getUserThunk());
      } catch (error) {
        console.error("Initialization failed:", error);
      } finally {
        setInitialization(true);
      }
    };
    initialize();
    dispatch(getBookToCartThunk());
    dispatch(getBookToFavoritesThunk());
  }, [dispatch]);

  if (!initialization) {
    return null;
  }
  return <>{children}</>;
};

export default InitializationProject;
