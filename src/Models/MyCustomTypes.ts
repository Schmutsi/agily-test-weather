export interface WeatherInfo {
    lon: number;
    lat: number;
    cityName: string;
    weekInfos: DailyInfo[];
}

export interface DailyInfo {
    date: String;
    dayTemperature: number;
    nightTemperature: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    iconId: string;
}
