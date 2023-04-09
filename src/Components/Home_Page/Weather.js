import CurrentWeather from '../Weather/CurrentWeather';
import Wind from '../Weather/Wind';
import DaysForecast from '../Weather/DaysForecast';
import HourlyForecast from '../Weather/HourlyForecast';

import styles from './Weather.module.css';

const Weather = (props) => {

    try{
        if(props.weatherInfo.current_weather){
            //console.log(props.weatherInfo);
    
            return(
                <section>
                    <h2>{props.currentPosition.name}</h2>
                    <div className={styles.widgets}>
                        <CurrentWeather name='Current weather' temp = {props.weatherInfo.current_weather.temperature}/>
                        <Wind speed={props.weatherInfo.current_weather.windspeed} direction={props.weatherInfo.current_weather.winddirection}/>
                    </div>
                    <DaysForecast forecast = {props.weatherInfo.daily}/>
                    <HourlyForecast hourly={props.weatherInfo.hourly} daily={props.weatherInfo.daily}/>
                </section>
            );
        } 
    } catch(err){
        console.log(err);
    }
}

export default Weather;