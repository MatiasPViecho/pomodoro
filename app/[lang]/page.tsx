import History from "@/components/History/History";
import Timer from "@/components/Timer/Timer";
import { DateProvider } from "@/contexts/useDateContext";
import Button from "@/components/Button/Button";
import { UserProvider } from "@/contexts/useUserContext";
import { UserMenu } from "@/components/UserMenu/UserMenu";
import { Suspense } from "react";
import { getDictionary } from "./dictionaries";
interface IHome {
  params: { lang: string };
}
export default async function Home({ params: { lang } }: IHome) {
  const dict = await getDictionary(lang); // en
  return (
    <main>
      <UserProvider>
        <DateProvider>
          <Suspense fallback={<div>loading...</div>}>
            <UserMenu dictionary={dict} />
          </Suspense>
          <Timer />
          <Button />
          <History />
        </DateProvider>
      </UserProvider>
    </main>
  );
}
