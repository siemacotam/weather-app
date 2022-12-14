import { Stack, Typography } from "@mui/material";
import { fahrenheitToCelsius } from "src/global/utils";
import * as S from "./TemperaturePanel.styled";

interface TemperaturePanelProps {
  feelslike: number;
  temp: number;
}

export const TemperaturePanel = ({
  feelslike,
  temp,
}: TemperaturePanelProps): JSX.Element => (
  <S.Container>
    <Stack alignItems="center">
      <Typography fontSize="2.5rem">
        {fahrenheitToCelsius(feelslike)} °
      </Typography>
      <Typography variant="caption" component="span">
        Perceptible temp.
      </Typography>
    </Stack>
    <Stack alignItems="center">
      <Typography fontSize="2.5rem">{fahrenheitToCelsius(temp)} °</Typography>
      <Typography variant="caption" component="span">
        Temperature
      </Typography>
    </Stack>
  </S.Container>
);
