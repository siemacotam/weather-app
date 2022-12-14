const API_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const QUERY_STRING = "?key=Y2QSUAYFEE436PFLJCHDMLAT5";

class WeatherService {
  getWeather(city: string) {
    return fetch(API_URL + city + QUERY_STRING).then((res) => res.json());
  }
}
export default new WeatherService();
