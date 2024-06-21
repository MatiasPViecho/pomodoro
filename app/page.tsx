import History from "@/components/History/History";
import Timer from "@/components/Timer/Timer";
import { DateProvider } from "@/contexts/useDateContext";
import Button from "@/components/Button/Button";
import { UserProvider } from "@/contexts/useUserContext";
import { UserMenu } from "@/components/UserMenu/UserMenu";
import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { NameChangerContainer } from "@/components/NameChanger/NameChangerContainer";
export default function Home() {
  const t = useTranslations("Index");
  return (
    <main>
      <UserProvider>
        <DateProvider>
          <Container>
            <NameChangerContainer />
            <UserMenu />
            <Timer />
            <Button />
            <History />
          </Container>
        </DateProvider>
      </UserProvider>
    </main>
  );
}
