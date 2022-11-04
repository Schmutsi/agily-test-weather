import { DailyInfo } from '../../Models/MyCustomTypes';
import './secondaryCard.css';

const SecondaryCard = (props: {
    dailyInfo: DailyInfo;
    index: number;
    setIndexDaySelected: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
        <div
            className="SecondaryCard"
            onClick={() => props.setIndexDaySelected(props.index)}
        >
            <img
                className="WeatherIcon"
                src={`https://openweathermap.org/img/wn/${props.dailyInfo.iconId}@4x.png`}
                alt="weather img"
            />
            <div className="DateContainer">
                <div className="DayDate">
                    {props.dailyInfo.date.split(' ')[0]}
                </div>
                <div className="NumberAndMonthDate">
                    {props.dailyInfo.date.split(' ')[1]}{' '}
                    {props.dailyInfo.date.split(' ')[2]}
                </div>
            </div>
            <div className="Temperature">
                {props.dailyInfo.dayTemperature.toFixed()}°C
            </div>
        </div>
    );
};

export default SecondaryCard;
