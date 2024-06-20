"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  addCategoryStorage,
  getUserData,
  IActionStatus,
  IUser,
  updateUserName,
} from "@/utils/storage";
interface IUserProvider {
  children: ReactNode;
}
interface IUserState {
  loading: boolean;
  data: IUser | null;
}
interface IUserContext {
  userData: IUserState;
  asyncUserInfo: () => void;
}
const UserContext = createContext<IUserContext | undefined>(undefined);
export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUserState>({ loading: false, data: null });
  useEffect(() => {
    asyncUserInfo();
  }, []);
  const asyncUserInfo = async () => {
    setUser((prev) => ({ ...prev, loading: true }));
    const res = await getUserData();
    if (res) {
      setUser({
        loading: false,
        data: res,
      });
    }
    setUser((prev) => ({ ...prev, loading: false }));
  };
  const contextValues = useMemo(() => {
    return {
      userData: user,
      asyncUserInfo,
    };
  }, [user]);
  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("User Context Error");
  }
  return context;
}
