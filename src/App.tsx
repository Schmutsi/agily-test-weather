import React, { useEffect, useState } from 'react';
import './App.css';
import { WeatherInfo } from './Models/MyCustomTypes';
import DetailsPage from './Screens/DetailsPage';
import SearchPage from './Screens/SearchPage';

function App() {
    const [findCity, setFindCity] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>();

    useEffect(() => {
        if (weatherInfo) {
            setFindCity(true);
        }
    }, [weatherInfo]);

    console.log(weatherInfo);

    if (!findCity) {
        return <SearchPage setWeatherInfo={setWeatherInfo} />;
    } else {
        return (
            <DetailsPage weatherInfo={weatherInfo} setFindCity={setFindCity} />
        );
    }
}

export default App;
