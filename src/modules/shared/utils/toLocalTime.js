export const convertToLocalTime = (utcTime) => {
  const localTime = new Date(utcTime);
  return localTime.toString();
};
