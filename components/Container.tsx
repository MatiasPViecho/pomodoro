import { ReactNode } from "react";
interface IContainer {
  children: ReactNode;
  status: "info" | "running" | "ended";
}
export const Container = ({ children, status = "info" }: IContainer) => {
  return (
    <div className="border rounded-t-[64px] rounded-l-2xl rounded-r-2xl rounded-b-[32px] bg-pomodoro-grey">
      {children}
    </div>
  );
};
