import { lighten, Stack, styled } from "@mui/material";
import { theme } from "src/theme";

export const Container = styled(Stack)({
  flexDirection: "row",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.grey[400]}`,
  padding: "8px",
  justifyContent: "space-evenly",
  background: lighten(theme.palette.success.light, 0.85),
});
