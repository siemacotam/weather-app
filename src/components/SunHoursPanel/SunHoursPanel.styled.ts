import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import NightlightTwoToneIcon from "@mui/icons-material/NightlightTwoTone";
import { Stack, styled } from "@mui/material";
import { theme } from "src/theme";

export const Container = styled(Stack)({
  background: "black",
  padding: "8px 16px",
  borderRadius: "5px",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  justifyContent: "center",
});

export const styledSunIcon = styled(WbSunnyTwoToneIcon)({
  color: theme.palette.warning.light,
});

export const styledMoonIcon = styled(NightlightTwoToneIcon)({
  color: theme.palette.common.white,
});
