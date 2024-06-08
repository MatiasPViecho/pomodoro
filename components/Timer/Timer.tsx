"use client";
import { createContext, useContext, useState } from "react";
const available_times: Array<number> = [
  1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
];
export default function Timer() {
  const [dates, setDates] = useState([]);
  return (
    <div className="flex flex-col w-full">
      <h1 className="mx-auto">Pomodoro Timer</h1>
    </div>
  );
}
