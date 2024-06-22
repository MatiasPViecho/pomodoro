interface IToast {
  msg: string;
  type: string;
  duration: number;
  removeSelf: () => void;
}
const TIME_TO_STOP_ANIMATION = 1200;
const TIME_TO_REMOVE_SELF_PROCESS = 800;
const checkTypeValidity = (type: string): boolean => {
  switch (type) {
    case "success":
    case "warning":
    case "danger":
    case "info":
      return true;

    default:
      return false;
  }
};
export const Toast = ({
  msg = "",
  type = "info",
  duration,
  removeSelf,
}: IToast) => {
  const finalType = checkTypeValidity(type) ? type : "info";
  setTimeout(() => {
    removeSelf();
  }, duration);
  const typeClassNames: { [key: string]: string } = {
    info: "gray",
    warning: "yellow",
    success: "green",
    danger: "red",
  };
  const startRemoveProcess = () => {
    setTimeout(() => {
      removeSelf();
    }, TIME_TO_REMOVE_SELF_PROCESS);
  };
  return (
    <button
      onClick={() => startRemoveProcess()}
      className={`transition-all w-full max-w-72 bg-${typeClassNames[finalType]}-100 shadow-md text-left px-2 pl-4 py-2 rounded text-black font-light uppercase
      border-l-8 border-l-${typeClassNames[finalType]}-500
     `}
    >
      {msg}
    </button>
  );
};
