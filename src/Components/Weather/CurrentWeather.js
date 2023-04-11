import { useState, useEffect } from 'react';

import { getWeatherImageData } from '../../data/weather_code_images';

import styles from './CurrentWeather.module.css';

const CurrentWeather = (props) =>{

    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        setInterval(() => setTime(new Date()), 1000);
    }, []);

    return(
        <div className={styles.container}>
            <h3 className={styles.title}>{props.name}</h3>
            <h4 className={styles.time}>{time.toLocaleTimeString().slice(0, 5) + time.toLocaleTimeString().slice(8)}</h4>
            <div className={styles.temp}>
                <img 
                    src={getWeatherImageData(props.weatherCode, props.isDay)[0].image} 
                    alt={getWeatherImageData(props.weatherCode, props.isDay)[0].alt}
                />
                <p>{`${Math.round(props.temp)} ℃`}</p>
            </div>
        </div>
    );
}

export default CurrentWeather;