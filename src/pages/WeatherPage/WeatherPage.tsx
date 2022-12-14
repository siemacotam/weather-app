import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router";
import { CompareTable, Search, SearchedCityWeather } from "src/components";
import { useAppSelector } from "src/store/hooks";

export const WeatherPage = () => {
  const city = useAppSelector((store) => store.weather.searchedData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!city) {
      navigate("/");
    }
  }, [city, navigate]);

  if (!city) {
    return null;
  }

  return (
    <Grid item xs={12} p={1}>
      <Search />
      <SearchedCityWeather city={city} />
      <CompareTable />
    </Grid>
  );
};
