interface IToast {
  msg: string;
  type: string;
}
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
export const Toast = ({ msg = "", type = "info" }: IToast) => {
  const finalType = checkTypeValidity(type) ? type : "info";
  const typeClassNames: { [key: string]: string } = {
    info: "gray-300",
    warning: "yellow-300",
    success: "green-300",
    danger: "red-300",
  };
  return (
    <span
      className={`bg-${typeClassNames[finalType]}  text-center px-12 py-2 rounded text-black font-bold uppercase`}
    >
      {msg}
    </span>
  );
};
