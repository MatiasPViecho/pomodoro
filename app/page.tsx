import History from "@/components/History/History";
import Timer from "@/components/Timer/Timer";
import { DateProvider } from "@/contexts/useDateContext";
import Button from "@/components/Button/Button";
import { UserProvider } from "@/contexts/useUserContext";
import { UserMenu } from "@/components/UserMenu/UserMenu";
import { useTranslations } from "next-intl";
interface IHome {
  params: { lang: string };
}
export default function Home() {
  const t = useTranslations("Index");
  return (
    <main>
      <UserProvider>
        <DateProvider>
          <UserMenu />
          <h1>{t("title")}</h1>
          <Timer />
          <Button />
          <History />
        </DateProvider>
      </UserProvider>
    </main>
  );
}
