import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as S from "./CompareTable.styled";
import { useAppSelector } from "src/store/hooks";
import { compareNumbers, compareTemperature } from "./CompareTable.helpers";
import { tableHeaders } from "./CompareTable.const";

export const CompareTable = () => {
  const data = useAppSelector((store) => store.weather.citiesData);
  const searchedCity = useAppSelector((store) => store.weather.searchedData);

  if (searchedCity === null || data.length === 0) {
    return null;
  }

  const allignRight = (index: number) =>
    index === tableHeaders.length - 1 ? "right" : "left";

  const { feelslike, humidity, pressure } = searchedCity.currentConditions;

  return (
    <Box p={1}>
      <Card variant="outlined">
        <CardContent>
          <Typography fontWeight="bold">Comparison</Typography>
          <TableContainer component={Card} variant="outlined">
            <Table>
              <TableHead>
                <TableRow>
                  {tableHeaders.map((cell, index) => (
                    <S.StyledTableCell key={cell} align={allignRight(index)}>
                      {cell}
                    </S.StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((city) => (
                  <S.StyledTableRow key={city.resolvedAddress}>
                    <S.StyledTableCell> {city.address} </S.StyledTableCell>
                    <S.StyledTableCell>
                      {compareTemperature(
                        feelslike,
                        city.currentConditions.feelslike
                      )}
                    </S.StyledTableCell>
                    <S.StyledTableCell>
                      {compareNumbers(
                        humidity,
                        city.currentConditions.humidity,
                        "%"
                      )}
                    </S.StyledTableCell>
                    <S.StyledTableCell align="right">
                      {compareNumbers(
                        pressure,
                        city.currentConditions.pressure,
                        "mbar"
                      )}
                    </S.StyledTableCell>
                  </S.StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};
