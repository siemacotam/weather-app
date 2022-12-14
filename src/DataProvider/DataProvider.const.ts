import weatherServices from "src/services/weather-services";

export const popularCities = [
  "Warszawa",
  "Kraków",
  "Wrocław",
  "Poznań",
  "Gdańsk",
  "Katowice",
];

export const createPromises = () =>
  popularCities.map((city) => weatherServices.getWeather(city));
