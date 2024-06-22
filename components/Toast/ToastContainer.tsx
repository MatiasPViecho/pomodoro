"use client";
import { Toast } from "./Toast";
import { useToasts } from "@/contexts/ToastContext";
export const ToastContainer = () => {
  const { toastData, removeToast, checkNewToasts } = useToasts();
  return (
    <div className={`absolute bottom-4 `}>
      <ul className={`transition-all flex flex-col gap-2`}>
        {toastData &&
          toastData.map((toast) => {
            return (
              <li key={toast.id} className={`mx-auto text-center`}>
                <Toast
                  duration={toast.duration}
                  removeSelf={() => removeToast(toast.id)}
                  msg={toast.message}
                  type={toast.type}
                />
              </li>
            );
          })}
      </ul>
      <button className="font-bold rounded-md" onClick={checkNewToasts}>
        check
      </button>
    </div>
  );
};
