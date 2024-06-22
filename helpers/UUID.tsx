const UUID = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
export const generateUUID = (): string => {
  const newUUID = UUID;
  return newUUID.replace(/[xy]/g, function (x) {
    const r = (Math.random() * 16) | 0,
      v = x === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
