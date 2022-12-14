import { Grid, Card, CardContent, Typography, Stack } from "@mui/material";
import { tooltipInfo } from "src/global";
import { theme } from "src/theme";
import { TooltipElement } from "../TooltipElement";
import { DetailsPanelProps } from "./SearchedCityWeather.types";

export const DetailsPanel = ({
  data: { moonphase, cloudcover, uvindex, solarradiation },
  description,
}: DetailsPanelProps) => (
  <Grid item xs={12} md={6}>
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardContent>
        <Stack rowGap={2}>
          <Typography fontWeight="bold">What can we expect ?</Typography>
          <Typography>{description}</Typography>
          <Card variant="outlined" sx={{ bgcolor: theme.palette.grey[100] }}>
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
);
