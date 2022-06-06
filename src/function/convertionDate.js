export const convertionDate = (milliseconds) => {
  const date = new Date(parseInt(milliseconds));
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const resultDate = date.toLocaleDateString("ru", options);
  return resultDate
};
