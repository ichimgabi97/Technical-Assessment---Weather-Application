import { useState ,useEffect } from 'react';

import { getWeatherImageData } from '../../data/weather_code_images';

import styles from './DaysForecast.module.css';

//forecast
const DaysForecast = (props) =>{

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
    const [forecast, setForecast]= useState([]);

    const forecastList = (foreCast) =>{
        const today = new Date();
        let result = [];

        for(let i = 0; i < foreCast.time.length; i++){
            if(i === 0){
                result.push({
                    id: i,
                    dayName: 'Today',
                    minTemp: foreCast.apparent_temperature_min[i],
                    maxTemp: foreCast.apparent_temperature_max[i],
                    weathercode: foreCast.weathercode[i]
                })
            }else{
                result.push({
                    id: i,
                    dayName: weekDays[(today.getDay() + i) % weekDays.length],
                    minTemp: foreCast.apparent_temperature_min[i],
                    maxTemp: foreCast.apparent_temperature_max[i],
                    weathercode: foreCast.weathercode[i]
                })
            }
        }

        return result;
    }

    useEffect(() =>{
        setForecast(forecastList(props.forecast));
        //console.log(forecast);
    },[props.forecast]);

    return(
        <div className={styles.container}>
            {forecast.map(el => (
                <div key={el.id} className={styles.day}>
                    <p className={styles.day_name}>{el.dayName}</p>
                    <img 
                        src={getWeatherImageData(el.weathercode, 1)[0].image} 
                        alt={getWeatherImageData(el.weathercode, 1)[0].alt}
                    /> 
                    <p className={styles.day_temp}>{`${Math.round(el.minTemp)} ℃ / ${Math.round(el.maxTemp)} ℃`}</p>
                </div>
            ))}
        </div>
    );
}

export default DaysForecast;