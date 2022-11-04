import { useState } from 'react';
import { getWeatherCityService } from '../../Services/weather.services';
import './searchPage.css';

const SearchPage = (props: { setWeatherInfo: any }) => {
    const [query, setQuery] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="SearchPage">
            <h1 className="PrincipleTitle">
                The Forcast <br />
                Weather App
            </h1>
            <input
                className="Input"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        setErrorMessage('');
                        getWeatherCityService(query).then((weatherInfo) => {
                            console.log(weatherInfo);

                            if (typeof weatherInfo === 'string') {
                                setErrorMessage(weatherInfo);
                            } else {
                                props.setWeatherInfo(weatherInfo);
                            }
                        });
                        setQuery('');
                    }
                }}
            />
            <p className="ErrorMessage">{errorMessage}</p>
        </div>
    );
};

export default SearchPage;
