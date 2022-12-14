const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getDayFromEpoch = (time: number) => {
  const date = new Date(time * 1000);
  return weekday[date.getUTCDay()];
};
