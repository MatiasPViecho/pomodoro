import History from "@/components/History/History";
import Timer from "@/components/Timer/Timer";
import { DateProvider } from "@/contexts/useDateContext";
import Button from "@/components/Button/Button";
import { UserProvider } from "@/contexts/useUserContext";
import { UserMenu } from "@/components/UserMenu/UserMenu";
import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { NameChangerContainer } from "@/components/NameChanger/NameChangerContainer";
import { Fragment } from "react";
import { ToastContainer } from "@/components/Toast/ToastContainer";
import { ToastProvider } from "@/contexts/ToastContext";
export default function Home() {
  const t = useTranslations("Index");
  return (
    <Fragment>
      <ToastProvider>
        <ToastContainer />
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
      </ToastProvider>
    </Fragment>
  );
}
