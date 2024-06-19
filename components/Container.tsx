import { ReactNode } from "react";
interface IContainer {
  children: ReactNode;
}
export const Container = ({ children }: IContainer) => {
  return (
    <div className="relative rounded-tl-[64px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[16px] bg-pomodoro-grey border-pomodoro-border shadow-inner border-2 border-l-4 border-b-4 pt-16 ">
      {children}
    </div>
  );
};
