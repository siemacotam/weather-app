import { HomePage, WeatherPage } from "src/pages";
import { Route } from "../types";

export const routes: Route[] = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/:city",
    component: <WeatherPage />,
  },
];
