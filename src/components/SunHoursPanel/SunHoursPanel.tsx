import { Stack, Tooltip, Typography } from "@mui/material";
import { tooltipInfo } from "src/global";
import * as S from "./SunHoursPanel.styled";

interface SunHoursPanelProps {
  sunset: string;
  sunrise: string;
}

export const SunHoursPanel = ({
  sunset,
  sunrise,
}: SunHoursPanelProps): JSX.Element => (
  <Stack direction="row" justifyContent="space-evenly" spacing={2}>
    <Tooltip title={tooltipInfo.sunset}>
      <S.Container>
        <S.styledSunIcon />
        <Typography color="white">{sunrise}</Typography>
      </S.Container>
    </Tooltip>
    <Tooltip title={tooltipInfo.sunrise}>
      <S.Container>
        <S.styledMoonIcon />
        <Typography color="white">{sunset}</Typography>
      </S.Container>
    </Tooltip>
  </Stack>
);
