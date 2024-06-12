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
const UserContext = createContext<IUserContext | undefined>(undefined);
export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser>(getUserData());
  const updateUsernameContext = (newName: String): void => {
    updateUserName(newName).then(() => {
      setUser(getUserData());
    });
  };
  const addCategory = (category: string): IActionStatus => {
    return addCategoryStorage(category);
  };
  return (
    <UserContext.Provider value={{ user, updateUsernameContext, addCategory }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
