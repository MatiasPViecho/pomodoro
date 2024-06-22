"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { generateUUID } from "@/helpers/UUID";
interface IToastProvider {
  children: ReactNode;
}
export interface IToast {
  message: string;
  type: string;
  id: string;
  duration: number;
}
interface IToastContext {
  toastData: IToast[];
  removeToast: (value: string) => void;
  checkNewToasts: () => void;
}
const initialMockToastArray: IToast[] = [
  {
    message: "test",
    type: "info",
    id: generateUUID(),
    duration: 2500,
  },
  {
    message: "Test warning 2",
    type: "warning",
    id: generateUUID(),
    duration: 2500,
  },
];
const ToastContext = createContext<IToastContext | undefined>(undefined);
export const ToastProvider = ({ children }: IToastProvider) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [toasts, setToasts] = useState<IToast[]>(initialMockToastArray || []);
  const removeToast = (id: string): void => {
    const newToasts = toasts.filter((e) => e.id !== id);
    newToasts.map((e) => e.id !== id);
    setToasts(newToasts);
    setTimeout(() => {});
  };
  const checkNewToasts = () => {
    console.log("test");
    const toastMsg = searchParams.get("toast");
    const toastType = searchParams.get("type");
    if (toastMsg) {
      const newToast: IToast = {
        duration: 2500,
        id: generateUUID(),
        message: toastMsg,
        type: toastType || "info",
      };
      setToasts((prev) => [...prev, newToast]);
      router.replace(pathname);
    }
  };
  const contextValues = useMemo(() => {
    return {
      toastData: toasts,
      checkNewToasts,
      removeToast,
    };
  }, [toasts]);
  return (
    <ToastContext.Provider value={contextValues}>
      {children}
    </ToastContext.Provider>
  );
};

export function useToasts() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("User Context Error");
  }
  return context;
}
