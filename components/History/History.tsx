"use client";
import { useContext } from "react";
import DateContext from "@/contexts/useDateContext";
export default function History() {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("undefined dateContext");
  }
  const { dates } = context;
  return (
    <ul className="flex flex-col gap-2 p-2 border border-gray-600 rounded-sm">
      {dates && dates.length > 0 ? (
        dates.map((date) => (
          <li>{`${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()} - ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</li>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
}
