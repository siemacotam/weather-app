import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0,0,0)",
    },
  },
  typography: {
    fontFamily: `"Oswald","Roboto", "Helvetica", "Arial", sans-serif;`,
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingBottom: "16px !important",
        },
      },
    },
  },
});
