"use client";
import { createContext, ReactNode, useState } from "react";
import {
  addCategoryStorage,
  getUserData,
  IActionStatus,
  IUser,
  updateUserName,
} from "@/utils/storage";
interface IUserContext {
  user: IUser;
  updateUsernameContext: (newUser: string) => void;
  addCategory: (newCategory: string) => IActionStatus;
}
interface IUserProvider {
  children: ReactNode;
}
interface IUserState {
  loading: boolean;
  data: IUser | null;
}
const UserContext = createContext<IUserContext | undefined>(undefined);
export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUserState>({ loading: false, data: null });
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserContext;
