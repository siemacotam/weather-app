import { Grid, Box } from "@mui/material";
import { Search, CityWeather } from "src/components";
import { useAppSelector } from "src/store/hooks";

export const HomePage = () => {
  const data = useAppSelector((store) => store.weather.citiesData);

  return (
    <Box>
      <Search />
      <Grid container>
        {data.map((el) => (
          <CityWeather key={el.resolvedAddress} city={el} />
        ))}
      </Grid>
    </Box>
  );
};
