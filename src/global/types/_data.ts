export type Values<T> = T[keyof T];

export interface Response {
  address: string;
  currentConditions: CurrentConditions;
  days: DayConditions[];
  description: string;
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
}

export interface CurrentConditions {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  dew: number;
  feelslike: number;
  humidity: number;
  icon: string;
  moonphase: number;
  precip: number;
  precipprob: number;
  pressure: number;
  snow: number;
  snowdepth: number;
  solarradiation: number;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  temp: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windspeed: number;
}

export interface HourCondition {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  dew: number;
  feelslike: number;
  humidity: number;
  icon: string;
  precip: number;
  precipprob: number;
  pressure: number;
  severerisk: number;
  snow: number;
  snowdepth: number;
  solarenergy: number;
  solarradiation: number;
  source: string;
  temp: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windgust: number;
  windspeed: number;
}

export interface DayConditions {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  description: string;
  dew: number;
  feelslike: number;
  feelslikemax: number;
  feelslikemin: number;
  hours: HourCondition[];
  humidity: number;
  icon: string;
  moonphase: number;
  precip: number;
  precipcover: number;
  precipprob: number;
  pressure: number;
  severerisk: number;
  snow: number;
  snowdepth: number;
  solarenergy: number;
  solarradiation: number;
  source: string;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  temp: number;
  tempmax: number;
  tempmin: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windgust: number;
  windspeed: number;
}
