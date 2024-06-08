"use client";
import { createContext, useState, ReactNode } from "react";
interface IDateContext {
  dates: Date[];
  addDate: (newDate: Date) => void;
}
interface IDateProvider {
  children: ReactNode;
}
const DateContext = createContext<IDateContext | undefined>(undefined);
export const DateProvider = ({ children }: IDateProvider) => {
  const [dates, setDates] = useState<Date[]>([]);

  const addDate = (newDate: Date) => {
    setDates([...dates, newDate]);
  };

  return (
    <DateContext.Provider value={{ dates, addDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateContext;
