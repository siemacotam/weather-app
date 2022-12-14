import { Card, CardContent, Stack, Typography } from "@mui/material";
import { getDayFromEpoch } from "src/global";
import { TemperaturePanel } from "src/components";
import { NextDayWeatherProps } from "./NextDayWeather.types";

export const NextDayWeather = ({ data }: NextDayWeatherProps): JSX.Element => {
  const {
    datetime,
    description,
    temp,
    feelslike,
    feelslikemax,
    feelslikemin,
    datetimeEpoch,
  } = data;

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardContent>
        <Stack rowGap={1}>
          <Typography>
            {getDayFromEpoch(datetimeEpoch)}
            <Typography component="span" variant="caption" pl={1}>
              ({datetime})
            </Typography>
          </Typography>
          <TemperaturePanel temp={temp} feelslike={feelslike} />
          <Stack direction="row" justifyContent="space-between">
            <Typography>Min/Max temp:</Typography>
            <Typography>
              {Math.round(feelslikemin)}°/{Math.round(feelslikemax)}°
            </Typography>
          </Stack>
          <Typography>{description}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
