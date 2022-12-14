import { Typography } from "@mui/material";
import { fahrenheitToCelsius } from "src/global/utils";
import { theme } from "src/theme";

const getCompareLabel = (value: number, unit?: string) => {
  switch (true) {
    case value > 0:
      return (
        <Typography component="span" color={theme.palette.success.main}>
          {value} {unit} more
        </Typography>
      );
    case value === 0:
      return "The same";
    case value < 0:
      return (
        <Typography component="span" color={theme.palette.error.main}>
          {Math.abs(value)} {unit} less
        </Typography>
      );
    default:
      return "";
  }
};

export const compareTemperature = (
  searchedCityTemp: number,
  cityTemp: number
) => {
  const searchedCityTempInCelsius = fahrenheitToCelsius(searchedCityTemp);
  const cityTempInCelcius = fahrenheitToCelsius(cityTemp);

  const temperatureDiffrence = cityTempInCelcius - searchedCityTempInCelsius;

  return getCompareLabel(temperatureDiffrence, "°");
};

export const compareNumbers = (
  searchedCityValue: number,
  cityValue: number,
  unit?: string
) => {
  const diffrence = Math.round(cityValue - searchedCityValue);

  return getCompareLabel(diffrence, unit);
};
