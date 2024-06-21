"use client";
import { Fragment, ReactNode } from "react";
import { useState, useEffect } from "react";
import { Toast } from "./Toast";
interface IToast {
  message: string;
  type: string;
  id: string;
}
const initialMockToastArray: IToast[] = [
  {
    message: "test",
    type: "info",
    //id: randomUUID(),
    id: "1",
  },
  {
    message: "Test warning 2",
    type: "warning",
    //id: randomUUID(),
    id: "2",
  },
];
export const ToastContainer = () => {
  const [toasts, setToasts] = useState<IToast[]>(initialMockToastArray || []);
  const addToast = (formData: FormData): void => {
    const type: null | string = formData.get("type") as string;
    const message: null | string = formData.get("message") as string;
    const length = toasts.length + 1;
    setToasts([
      ...toasts,
      {
        message,
        type,
        id: `${length}`,
      },
    ]);
  };
  return (
    <div className="absolute bottom-4 flex flex-col gap-2 w-full mx-auto transition-all">
      {toasts &&
        toasts.map((toast, _i) => {
          return (
            <Fragment key={toast.id}>
              <Toast msg={toast.message} type={toast.type} />
            </Fragment>
          );
        })}
      <form action={(e) => addToast(e)}>
        <input id="message" name="message" type="text" />
        <select id="type" name="type">
          <option value={""}>-- type -- </option>
          <option value={"info"}>info</option>
          <option value={"warning"}>warning</option>
          <option value={"danger"}>danger</option>
          <option value={"success"}>success</option>
        </select>
        <button className="bg-blue-200 p-1 rounded-sm">Send</button>
      </form>
    </div>
  );
};
