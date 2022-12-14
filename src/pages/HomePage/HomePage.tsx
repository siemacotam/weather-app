import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Search, CityWeather } from "src/components";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { clearMessage } from "src/store/reducers/messageReducer";

export const HomePage = () => {
  const data = useAppSelector((store) => store.weather.citiesData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  return (
    <div>
      <Search />
      <Grid container>
        {data.map((el) => (
          <CityWeather key={el.resolvedAddress} city={el} />
        ))}
      </Grid>
    </div>
  );
};
