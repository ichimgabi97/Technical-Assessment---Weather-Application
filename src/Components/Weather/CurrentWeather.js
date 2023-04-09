import { useState, useEffect } from 'react';

import styles from './CurrentWeather.module.css';

import clear_day_img from '../../assets/clear-day.png';

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
                <img src={clear_day_img} alt='clear day'/>
                <p>{`${Math.round(props.temp)} ℃`}</p>
            </div>
        </div>
    );
}

export default CurrentWeather;