import { DailyInfo } from '../../Models/MyCustomTypes';
import './principalCard.css';

const PrincipalCard = (props: {
    dailyInfo: DailyInfo;
    setIndexDaySelected: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
        <div
            className="PrincipalCard"
            onClick={() => props.setIndexDaySelected(0)}
        >
            <div className="HeaderCard">
                <img
                    className="WeatherIcon"
                    src={`https://openweathermap.org/img/wn/${props.dailyInfo.iconId}@4x.png`}
                    alt="weather img"
                />
                <h2 className="DateTitle">{props.dailyInfo.date}</h2>
            </div>
            <div className="BodyCard">
                <div className="ColumnBodyCard">
                    <div>
                        Jour : {props.dailyInfo.dayTemperature.toFixed(1)}°C
                    </div>
                    <div>
                        Nuit : {props.dailyInfo.nightTemperature.toFixed(1)}°C
                    </div>
                    <div>Humidité : {props.dailyInfo.humidity.toFixed()}%</div>
                </div>
                <div className="ColumnBodyCard">
                    <div>
                        Pression : {props.dailyInfo.pressure.toFixed()}hPa
                    </div>
                    <div>Vent : {props.dailyInfo.windSpeed.toFixed(2)}Km/h</div>
                </div>
            </div>
        </div>
    );
};

export default PrincipalCard;
