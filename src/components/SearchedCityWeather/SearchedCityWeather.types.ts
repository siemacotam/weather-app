import { CurrentConditions, Response } from "src/global";

export interface SearchedCityWeatherProps {
  city: Response;
}

export interface DetailsPanelProps {
  data: CurrentConditions;
  description: string;
}
