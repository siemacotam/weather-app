import {
  Card,
  CardContent,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { SunHoursPanel, TemperaturePanel } from "src/components";
import { CityWeatherProps } from "./CityWeather.types";
import { getWeatherValues } from "./CityWeather.helpers";

export const CityWeather = ({ city }: CityWeatherProps): JSX.Element => {
  if (!city) {
    return (
      <Grid item xs={12} md={4} p={1}>
        <Skeleton animation="wave" height={250} />
      </Grid>
    );
  }

  const {
    resolvedAddress,
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

  return (
    <Grid item xs={12} md={4} p={1}>
      <Card variant="outlined">
        <CardContent>
          <Stack rowGap={2}>
            <Typography fontSize="1.1rem" fontWeight="bold">
              {resolvedAddress}
            </Typography>
            <TemperaturePanel feelslike={feelslike} temp={temp} />
            <SunHoursPanel sunset={sunset} sunrise={sunrise} />
            <Grid container spacing={1}>
              {getWeatherValues(humidity, pressure, visibility, windspeed)}
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};
