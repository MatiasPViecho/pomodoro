"use client";
import { useContext, useState, useEffect } from "react";
import { IUser, defaultUser } from "@/utils/storage";
import { useUser } from "@/contexts/useUserContext";
interface IUserMenuDictionary {}
export const UserMenu = ({}: IUserMenuDictionary) => {
  const { userData, asyncUserInfo } = useUser();
  const userExists = userData && userData.data && !userData.loading;
  const addNewUser = (e: FormData) => {};
  return (
    <div className="flex flex-col gap-4 rounded-md px-4 py-8 min-w-20 bg-white text-black">
      {userExists && userData.data?.name !== "" ? (
        <div>
          <span>hellow {userData.data?.name}!</span>
        </div>
      ) : (
        <div>
          <span>Hello! What&apos;s your name?</span>
          <form action={(e) => addNewUser(e)}>
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
