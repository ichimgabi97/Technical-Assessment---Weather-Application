import CurrentWeather from '../Weather/CurrentWeather';
import Compass from '../Weather/Compass';

import styles from './Weather.module.css';

const Weather = (props) => {

    try{
        if(props.weatherInfo.current_weather){
            console.log(props.weatherInfo);
    
            return(
                <section>
                    <h2>{props.currentPosition.name}</h2>
                    <CurrentWeather name='Current weather' temp = {props.weatherInfo.current_weather.temperature}/>
                    <Compass speed={props.weatherInfo.current_weather.windspeed} direction={props.weatherInfo.current_weather.winddirection}/>
                </section>
            );
        } 
    } catch(err){
        console.log(err);
    }
}

export default Weather;