import { MAX_NAME_CHARACTER_LENGTH } from "@/constants/user";
import { ChangeEvent } from "react";
interface INameChange {
  active: boolean;
  activateNameChange: () => void;
  deactivateNameChange: () => void;
  changeCurrentName: (name: string) => void;
  updateRealName: () => void;
  callToAction: string;
  regret: string;
  action: string;
}
export const NameChanger = ({
  active = false,
  activateNameChange = () => ({}),
  deactivateNameChange = () => ({}),
  changeCurrentName = () => ({}),
  updateRealName = () => ({}),
  callToAction = "",
  regret = "",
  action = "",
}: INameChange) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeCurrentName(event.target.value);
  };
  return !active ? (
    <>
      <button
        className="opacity-70 text-pomodoro-black font-light text-xs "
        onClick={() => activateNameChange()}
      >
        {callToAction}
      </button>
    </>
  ) : (
    <>
      <button
        className="opacity-70 text-pomodoro-black font-light text-xs text-right"
        onClick={() => deactivateNameChange()}
      >
        {regret}
      </button>
      <input
        className="border-pomodoro-border border-2 rounded-md bg-pomodoro-border text-pomodoro-grey transition-all pl-3"
        type="text"
        maxLength={MAX_NAME_CHARACTER_LENGTH}
        onChange={(event) => handleChange(event)}
      />
      <button
        onClick={() => updateRealName()}
        className="pl-2 mt-1 border-pomodoro-border border rounded-sm bg-pomodoro-grey active:bg-pomodoro-border active:text-pomodoro-grey hover:bg-pomodoro-border animate-pulse hover:text-pomodoro-grey transition-all text-left min-w-60"
      >
        {action}
      </button>
    </>
  );
};
