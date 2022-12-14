import { useState, ChangeEvent, KeyboardEvent } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import weatherServices from "src/services/weather-services";
import { useDispatch } from "react-redux";
import { clearMessage, setMessage } from "src/store/reducers/messageReducer";
import { setSearchedData } from "src/store/reducers/weatherReducer";
import { AlertMessage } from "../AlertMessage";

export const Search = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setCity(e.target.value);

  const handleSearch = async () => {
    dispatch(clearMessage());
    if (!city) {
      dispatch(setMessage("Please fill the city to search"));
      return;
    }

    await weatherServices
      .getWeather(city)
      .then((res) => {
        dispatch(setSearchedData(res));
        navigate(`/${city}`);
      })
      .catch(() =>
        dispatch(
          setMessage(
            "Error with downloading the data. Please check if name of city is correct"
          )
        )
      );
  };

  const keyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box p={1}>
      <Card variant="outlined">
        <CardContent>
          <Grid item xs={12} rowGap={2}>
            <TextField
              fullWidth
              placeholder="Find city or country"
              value={city}
              onKeyDown={keyPress}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="outlined" onClick={handleSearch}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography>Search</Typography>
                        <SearchIcon sx={{ cursor: "pointer" }} />
                      </Stack>
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <AlertMessage />
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
