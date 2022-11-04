import axios from 'axios';
import { DailyInfo, WeatherInfo } from '../Models/MyCustomTypes';

const apiURL = 'https://api.openweathermap.org/data/2.5/';
const APIkey = 'db988691faf182dfc3750cd1e57f3718';

export const getWeatherCityService = async (cityName: String) => {
    const baseURL = `${apiURL}weather?q=${cityName}&appid=${APIkey}`;
    return await axios
        .get(baseURL)
        .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
                console.log(response.data);
                const data = response.data;
                return {
                    lon: data.coord.lon,
                    lat: data.coord.lat,
                    cityName: data.name,
                    dailyInfo: {
                        date: new Date(data.dt * 1000).toLocaleDateString(
                            'fr',
                            {
                                weekday: 'long',
                                day: 'numeric',
                                month: 'long',
                            }
                        ),
                        dayTemperature: 11,
                        nightTemperature: 8,
                        humidity: 14,
                        pressure: 1414,
                        windSpeed: 3,
                    } as DailyInfo,
                } as WeatherInfo;
            }
        })
        .catch((error) => {
            if (error.response.status === 404) {
                return `La ville ${cityName} n'a pas été trouvée`;
            }
        });
};
