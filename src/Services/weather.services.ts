import axios from 'axios';
import { DailyInfo, WeatherInfo } from '../Models/MyCustomTypes';

const apiURL = 'https://api.openweathermap.org/data/2.5/';
const APIkey = 'db988691faf182dfc3750cd1e57f3718';

export const getWeatherCityService = async (cityName: String) => {
    const baseURL = `${apiURL}weather?q=${cityName}&appid=${APIkey}`;
    return await axios
        .get(baseURL)
        .then(async (response) => {
            if (response.status === 200) {
                const lon = response.data.coord.lon;
                const lat = response.data.coord.lat;
                return await getWeatherCityPrevisionsService(
                    lon,
                    lat,
                    cityName
                );
            }
        })
        .catch((error) => {
            if (error.response.status === 404) {
                return `La ville ${cityName} n'a pas été trouvée`;
            }
        });
};

const getWeatherCityPrevisionsService = async (
    lon: number,
    lat: number,
    cityName: String
) => {
    const baseURL = `${apiURL}onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${APIkey}`;
    return await axios
        .get(baseURL)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;
                return {
                    lon: lon,
                    lat: lat,
                    cityName: cityName,
                    weekInfos: getWeekInfos(data.daily) as DailyInfo[],
                } as WeatherInfo;
            }
        })
        .catch((error) => {
            if (error.response.status === 404) {
                return `error latitude longitude`;
            }
        });
};

const getWeekInfos = (
    daily: {
        dt: any;
        temp: { day: any; night: any };
        humidity: any;
        pressure: any;
        wind_speed: any;
        weather: { icon: any }[];
    }[]
) => {
    const weekInfos = [] as unknown as DailyInfo[];
    // eslint-disable-next-line array-callback-return
    daily.map((day) => {
        const dayInfo = {
            date: new Date(day.dt * 1000).toLocaleDateString('fr', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
            }),
            dayTemperature: day.temp.day,
            nightTemperature: day.temp.night,
            humidity: day.humidity,
            pressure: day.pressure,
            windSpeed: day.wind_speed,
            iconId: day.weather[0].icon,
        } as DailyInfo;
        weekInfos.push(dayInfo);
    });
    return weekInfos;
};
