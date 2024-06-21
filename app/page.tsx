import History from "@/components/History/History";
import Timer from "@/components/Timer/Timer";
import { DateProvider } from "@/contexts/useDateContext";
import Button from "@/components/Button/Button";
import { UserProvider } from "@/contexts/useUserContext";
import { UserMenu } from "@/components/UserMenu/UserMenu";
import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { NameChangerContainer } from "@/components/NameChanger/NameChangerContainer";
import { Toast } from "@/components/Toast/Toast";
import { Fragment } from "react";
export default function Home() {
  const t = useTranslations("Index");
  return (
    <Fragment>
      <div className="absolute bottom-4 flex flex-col gap-2 w-full mx-auto">
        <Toast msg="test" type="info" />
        <Toast msg="test warning" type="warning" />
      </div>
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
    </Fragment>
  );
}
