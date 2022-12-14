import { Grid, Stack, Typography } from "@mui/material";
import { tooltipInfo } from "src/global";
import { TooltipElement } from "../TooltipElement";

export const getWeatherValues = (
  humidity: number,
  pressure: number,
  visibility: number,
  windspeed: number
) => {
  const values = [
    {
      tooltip: tooltipInfo.humidity,
      label: "Humidity",
      value: humidity,
      sufix: "%",
    },
    {
      tooltip: tooltipInfo.pressure,
      label: "Pressure",
      value: pressure,
      sufix: "mbar",
    },
    {
      tooltip: tooltipInfo.visibility,
      label: "Visibility",
      value: visibility,
      sufix: "km",
    },
    {
      tooltip: tooltipInfo.windspeed,
      label: "Windspeed",
      value: windspeed,
      sufix: "km",
    },
  ];

  return values.map(({ tooltip, label, value, sufix }) => (
    <Grid key={label} item xs={12} md={6} px={1}>
      <Stack direction="row" justifyContent="space-between">
        <TooltipElement title={tooltip} label={label} />
        <Typography>
          {value}
          {sufix}
        </Typography>
      </Stack>
    </Grid>
  ));
};
