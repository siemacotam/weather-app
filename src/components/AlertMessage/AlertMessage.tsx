import { useEffect } from "react";
import { Alert, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { clearMessage } from "src/store/reducers/messageReducer";

export const AlertMessage = (): JSX.Element | null => {
  const dispatch = useAppDispatch();
  const text = useAppSelector((store) => store.message.message);

  useEffect(() => {
    if (text) {
      const timer = setTimeout(() => dispatch(clearMessage()), 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [text, dispatch]);

  if (!text) {
    return null;
  }

  return (
    <Box p={1}>
      <Alert severity="error">{text}</Alert>
    </Box>
  );
};
