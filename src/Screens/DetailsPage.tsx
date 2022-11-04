import { WeatherInfo } from '../Models/MyCustomTypes';

const DetailsPage = (props: {
    weatherInfo: WeatherInfo | undefined;
    setFindCity: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="SearchPage">
            <button onClick={() => props.setFindCity(false)}>go back</button>
        </div>
    );
};

export default DetailsPage;
