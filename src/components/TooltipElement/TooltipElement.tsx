import { Stack, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface TooltipElementProps {
  title: string;
  label: string;
}

export const TooltipElement = ({ title, label }: TooltipElementProps) => (
  <Stack direction="row" alignItems="center">
    <Tooltip title={title}>
      <InfoOutlinedIcon sx={{ fontSize: "0.8rem" }} />
    </Tooltip>
    <Typography pl={0.5}>{label}</Typography>
  </Stack>
);
