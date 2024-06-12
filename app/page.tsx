import History from "@/components/History/History";
import Timer from "@/components/Timer/Timer";
import { DateProvider } from "@/contexts/useDateContext";
import Button from "@/components/Button/Button";
import { UserProvider } from "@/contexts/useUserContext";
import { UserMenu } from "@/components/UserMenu/UserMenu";
import { Suspense } from "react";
export default function Home() {
  return (
    <main>
      <UserProvider>
        <DateProvider>
          <Suspense fallback={<div>loading...</div>}>
            <UserMenu />
          </Suspense>
          <Timer />
          <Button />
          <History />
        </DateProvider>
      </UserProvider>
    </main>
  );
}
