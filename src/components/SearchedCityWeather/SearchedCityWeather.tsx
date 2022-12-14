import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { tooltipInfo } from "src/global";
import { theme } from "src/theme";
import { getWeatherValues } from "../CityWeather/CityWeather.helpers";
import {
  SunHoursPanel,
  TemperaturePanel,
  NextDayWeather,
  TooltipElement,
} from "src/components";
import { SearchedCityWeatherProps } from "./SearchedCityWeather.types";

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
      moonphase,
      cloudcover,
      uvindex,
      solarradiation,
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
                <Grid item xs={12} md={6}>
                  <Card variant="outlined" sx={{ height: "100%" }}>
                    <CardContent>
                      <Stack rowGap={2}>
                        <Typography fontWeight="bold">
                          What can we expect ?
                        </Typography>
                        <Typography>{description}</Typography>
                        <Card
                          variant="outlined"
                          sx={{ bgcolor: theme.palette.grey[100] }}
                        >
                          <CardContent>
                            <Grid container spacing={1}>
                              <Grid item xs={12} md={6}>
                                <TooltipElement
                                  title={tooltipInfo.moonphase}
                                  label="Moonphase"
                                />
                                <Typography>{moonphase}</Typography>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <TooltipElement
                                  title={tooltipInfo.cloudcover}
                                  label="Cloudcover"
                                />
                                <Typography>{cloudcover}%</Typography>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <TooltipElement
                                  title={tooltipInfo.uvindex}
                                  label="UV index"
                                />
                                <Typography>{uvindex}</Typography>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <TooltipElement
                                  title={tooltipInfo.solarradiation}
                                  label="Solar radiation"
                                />
                                <Typography>{solarradiation} MJ/m² </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <Typography fontWeight="bold">Next days:</Typography>
            <Grid container spacing={1}>
              {nextFourDays.map((day) => (
                <Grid key={day.datetime} item xs={12} md={3}>
                  <NextDayWeather data={day} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
