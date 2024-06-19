"use client";
import { useState } from "react";
import { getUserData, updateUserName } from "@/utils/storage";
import { NameChanger } from "./NameChanger";
import { useTranslations } from "next-intl";
import { MAX_NAME_CHARACTER_LENGTH } from "@/constants/user";
export const NameChangerContainer = () => {
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
  const changeRealName = () => {
    if (!currentName) {
      throw new Error(
        errors("Errors.over_limit", {
          char_length: `${MAX_NAME_CHARACTER_LENGTH}`,
        })
      );
    } else if (currentName === getUserData().name) {
      throw new Error(errors("Errors.unexistent"));
    }
    updateUserName(currentName);
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
