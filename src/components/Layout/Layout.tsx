import { Box, Typography, Stack } from "@mui/material";
import { LayoutProps } from "./LayoutProps";
import * as S from "./Layout.styled";
import { theme } from "src/theme";
import { maxContentWidth } from "src/global";
import { Link } from "react-router-dom";

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <Stack minHeight="100vh" bgcolor={theme.palette.grey[200]}>
    <S.HeaderContainer>
      <Box pl={2} maxWidth={maxContentWidth} mx="auto" width="100%">
        <Typography
          fontWeight="bold"
          letterSpacing="2px"
          fontSize="1.5rem"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "black" }}
        >
          Weather app
        </Typography>
      </Box>
    </S.HeaderContainer>
    <S.ContentContainer>{children}</S.ContentContainer>
  </Stack>
);
