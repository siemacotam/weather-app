export const fahrenheitToCelsius = (temp: number) =>
  Number((((temp - 32) * 5) / 9).toFixed());
