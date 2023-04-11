import CurrentWeather from '../Weather/CurrentWeather';
import Wind from '../Weather/Wind';
import DaysForecast from '../Weather/DaysForecast';
import HourlyForecast from '../Weather/HourlyForecast';

import styles from './Weather.module.css';

const Weather = (props) => {

    try{
        if(props.weatherInfo.current_weather && props.currentPosition.name !== ''){
            //console.log(props.weatherInfo);
    
            return(
                <section className={styles.container}>
                    <h2>{props.currentPosition.name}</h2>
                    <HourlyForecast 
                        hourly={props.weatherInfo.hourly} 
                        daily={props.weatherInfo.daily}
                    />
                    <div className={styles.container_widgets}>
                        <DaysForecast forecast = {props.weatherInfo.daily}/>
                        <div className={styles.widgets}>
                            <CurrentWeather 
                                name='Current weather' 
                                temp = {props.weatherInfo.current_weather.temperature} 
                                weatherCode={props.weatherInfo.current_weather.weathercode}
                                isDay = {props.weatherInfo.current_weather.is_day}
                            />
                            <Wind 
                                speed={props.weatherInfo.current_weather.windspeed} 
                                direction={props.weatherInfo.current_weather.winddirection}
                            />
                        </div>
                    </div>
                </section>
            );
        } 
    } catch(err){
        console.log(err);
    }
}

export default Weather;