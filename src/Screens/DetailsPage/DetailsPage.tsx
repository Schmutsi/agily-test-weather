import { useState } from 'react';
import PrincipalCard from '../../Components/PrincipalCard/PrincipalCard';
import SecondaryCard from '../../Components/SecondaryCard/SecondaryCard';
import { WeatherInfo } from '../../Models/MyCustomTypes';
import './detailsPage.css';

const DetailsPage = (props: {
    weatherInfo: WeatherInfo | undefined;
    setFindCity: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [indexDaySelected, setIndexDaySelected] = useState(0);
    return (
        <div className="DetailsPage">
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
