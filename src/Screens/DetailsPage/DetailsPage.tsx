import { useState } from 'react';
import PrincipalCard from '../../Components/PrincipalCard/PrincipalCard';
import SecondaryCard from '../../Components/SecondaryCard/SecondaryCard';
import { WeatherInfo } from '../../Models/MyCustomTypes';
import './detailsPage.css';

import Afrique from './../../Assets/Afrique.jpg';
import Europe from './../../Assets/Europe.jpg';
import Asie from './../../Assets/Asie.jpg';
import Oceanie from './../../Assets/Oceanie.jpg';
import Amerique from './../../Assets/Amerique.jpg';
import { getContinentName } from '@brixtol/country-continent';

const DetailsPage = (props: {
    weatherInfo: WeatherInfo | undefined;
    setFindCity: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [indexDaySelected, setIndexDaySelected] = useState(0);

    const getImageByContinent = (countryCode: string) => {
        const continent = getContinentName(countryCode);
        if (continent === 'Africa') {
            return Afrique;
        }
        if (continent === 'North America' || continent === 'South America') {
            return Amerique;
        }
        if (continent === 'Asia') {
            return Asie;
        }
        if (continent === 'Europe') {
            return Europe;
        }
        if (continent === 'Oceania') {
            return Oceanie;
        }
    };

    return (
        <div
            className={'DetailsPage'}
            style={{
                backgroundImage: props.weatherInfo
                    ? `url(${getImageByContinent(
                          props.weatherInfo?.countryCode
                      )})`
                    : '',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="ColumnLeft">
                <button
                    className="ButtonBack"
                    onClick={() => props.setFindCity(false)}
                >
                    {'<'}
                </button>
                <div className="CityName">{props.weatherInfo?.cityName}</div>
                {props.weatherInfo ? (
                    <PrincipalCard
                        dailyInfo={
                            props.weatherInfo?.weekInfos[indexDaySelected]
                        }
                        setIndexDaySelected={setIndexDaySelected}
                    />
                ) : (
                    <div />
                )}
            </div>
            <div className="ColumnRight">
                {
                    //eslint-disable-next-line array-callback-return
                    props.weatherInfo?.weekInfos.map((dailyInfo, index) => {
                        if (index !== indexDaySelected) {
                            return (
                                <SecondaryCard
                                    key={index}
                                    dailyInfo={dailyInfo}
                                    index={index}
                                    setIndexDaySelected={setIndexDaySelected}
                                />
                            );
                        }
                    })
                }
            </div>
        </div>
    );
};

export default DetailsPage;
