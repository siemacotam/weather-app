import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { getWeatherValues } from "../CityWeather/CityWeather.helpers";
import {
  SunHoursPanel,
  TemperaturePanel,
  NextDayWeather,
} from "src/components";
import { SearchedCityWeatherProps } from "./SearchedCityWeather.types";
import { DetailsPanel } from "./DetailsPanel";

export const SearchedCityWeather = ({
  city,
}: SearchedCityWeatherProps): JSX.Element => {
  const {
    resolvedAddress,
    description,
    days,
    currentConditions: {
      feelslike,
      temp,
      humidity,
      pressure,
      visibility,
      windspeed,
      sunrise,
      sunset,
    },
  } = city;

  const nextFourDays = days.slice(1, 5);

  return (
    <Grid item xs={12} container p={1} rowGap={2}>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <Stack rowGap={4}>
              <Typography fontSize="1.5rem" fontWeight="bold">
                {resolvedAddress}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Stack rowGap={2}>
                    <TemperaturePanel feelslike={feelslike} temp={temp} />
                    <SunHoursPanel sunset={sunset} sunrise={sunrise} />
                    <Grid container spacing={1}>
                      {getWeatherValues(
                        humidity,
                        pressure,
                        visibility,
                        windspeed
                      )}
                    </Grid>
                  </Stack>
                </Grid>
                <DetailsPanel
                  data={city.currentConditions}
                  description={description}
                />
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <Stack rowGap={2}>
              <Typography fontWeight="bold" fontSize="1.2rem">
                Next days:
              </Typography>
              <Grid container spacing={1}>
                {nextFourDays.map((day) => (
                  <Grid key={day.datetime} item xs={12} md={3}>
                    <NextDayWeather data={day} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
