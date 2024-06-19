"use client";
import { useContext, useState, useEffect } from "react";
import UserContext from "@/contexts/useUserContext";
import { IUser, defaultUser } from "@/utils/storage";
interface IUserMenuDictionary {}
export const UserMenu = ({}: IUserMenuDictionary) => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("undefined UserContext");
  }
  const user: IUser | null = context.user ? context.user : null;
  async function addNewUser(formData: FormData) {
    const chosenName = formData.get("name");
    if (chosenName && typeof chosenName === "string") {
      context?.updateUsernameContext(chosenName);
    }
  }
  return (
    <div className="flex flex-col gap-4 rounded-md px-4 py-8 min-w-20 bg-white text-black">
      {user && user.name && user.name !== "" ? (
        <div>
          <span>hellow {user.name}!</span>
        </div>
      ) : (
        <div>
          <span>Hello! What&apos;s your name?</span>
          <form action={addNewUser}>
            <div className="flex flex-col gap-2">
              <label className="text-gray-600 font-light">new username</label>
              <input
                placeholder="username"
                id="name"
                name="name"
                type="text"
                className="p-2 border-black- rounded-sm max-w-56 bg-gray-300"
                maxLength={80}
              />
            </div>
            <button className="p-1 rounded-sm text-center bg-gray-400 hover:bg-gray-600 active:bg-gray-800 ">
              Confirm
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
