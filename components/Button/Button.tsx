"use client";
import { useContext } from "react";
import DateContext from "@/contexts/useDateContext";
export default function Button() {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("undefined dateContext");
  }
  const { addDate } = context;
  const addNewDate = () => {
    const newDate = new Date();
    addDate(newDate);
  };
  return (
    <button
      className="px-4 py-2 rounded-md bg-white text-black border-black border max-w-56"
      onClick={addNewDate}
    >
      Iniciar Timer
    </button>
  );
}
