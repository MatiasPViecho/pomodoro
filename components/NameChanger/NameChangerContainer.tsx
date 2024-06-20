"use client";
import { useState } from "react";
import { updateUserName } from "@/utils/storage";
import { NameChanger } from "./NameChanger";
import { useTranslations } from "next-intl";
import { MAX_NAME_CHARACTER_LENGTH } from "@/constants/user";
import { useUser } from "@/contexts/useUserContext";
export const NameChangerContainer = () => {
  const { userData, asyncUserInfo } = useUser();
  const [active, isActive] = useState<boolean>(false);
  const [currentName, setCurrentName] = useState<string>("");
  const t = useTranslations("Index.change_name");
  const errors = useTranslations("Errors");
  const activateNameChange = () => {
    isActive(true);
  };
  const deactivateNameChange = () => {
    isActive(false);
    setCurrentName("");
  };
  const changeCurrentName = (newName: string) => {
    setCurrentName(newName);
  };
  const changeRealName = async () => {
    if (!currentName) {
      throw new Error(errors("change_name.unexistent"));
    } else if (currentName === userData.data?.name) {
      throw new Error(errors("change_name.same_name"));
    } else if (currentName.length >= 16) {
      throw new Error(
        errors("change_name.over_limit", {
          char_length: `${MAX_NAME_CHARACTER_LENGTH}`,
        })
      );
    }
    updateUserName(currentName).then(() => {
      asyncUserInfo();
    });
  };
  return (
    <div className="absolute top-4 right-4 flex flex-col text-right">
      <NameChanger
        activateNameChange={activateNameChange}
        deactivateNameChange={deactivateNameChange}
        changeCurrentName={changeCurrentName}
        updateRealName={changeRealName}
        active={active}
        callToAction={t("cta")}
        regret={t("regret")}
        action={t("action", { name: currentName })}
      />
    </div>
  );
};
