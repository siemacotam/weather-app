import { useEffect } from "react";
import { Response } from "src/global";
import weatherServices from "src/services/weather-services";
import { useAppDispatch } from "src/store/hooks";
import { setMessage } from "src/store/reducers/messageReducer";
import { setCitiesData } from "src/store/reducers/weatherReducer";
import { popularCities } from "./DataProvider.const";
import { DataProviderProps } from "./DataProvider.types";

export const createPromises = () =>
  popularCities.map((city) => weatherServices.getWeather(city));

export const DataProvider = ({ children }: DataProviderProps): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      let cities: Response[] = [];

      try {
        const promises = createPromises();
        await Promise.all(promises)
          .then((values) => {
            values.forEach((res) => {
              cities.push(res);
            });
          })
          .catch(() => dispatch(setMessage("Error with downloading the data")));
        dispatch(setCitiesData(cities));
      } catch {}
    };

    getData();
  }, [dispatch]);

  return children;
};
