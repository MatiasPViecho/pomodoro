import History from "@/components/History/History";
import Timer from "@/components/Timer/Timer";
import { DateProvider } from "@/contexts/useDateContext";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <main>
      <DateProvider>
        <Timer />
        <Button />
        <History />
      </DateProvider>
    </main>
  );
}
