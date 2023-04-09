import { useState, useEffect } from 'react';

import styles from './HourlyForecast.module.css';

import clear_day_img from '../../assets/clear-day.png';

const HourlyForecast = (props) =>{
    console.log(props.hourly);
    console.log(props.daily);

    const [hourlyList, setHourlyList] = useState([]);
    const [startHourIndex, setStartHourIndex] = useState(0);

    const getHourlyList = (hourly, daily) => {
        let result = [];
        const date = new Date();
        let hour = date.getHours();

        for(let i = 0; i < 24; i++){
            result.push({
                id: i,
                apparent_temperature: hourly.apparent_temperature[hour + i],
                weathercode: hourly.weathercode[hour + i],
                time: hourly.time[hour + i]
            });
        }

        return result;
    }

    useEffect(()=>{
        setHourlyList(getHourlyList(props.hourly, props.daily));
        //console.log('--------------------------')
        //console.log(hourlyList);
    }, []);

    return(
        <>
        <button onClick={() => setStartHourIndex(startHourIndex + 1)}>Click</button>
        <div className={styles.container}>
            {hourlyList.slice(startHourIndex, startHourIndex + 8).map(el =>(
                <div className={styles.container_hourly} key={el.id}>
                    <p className={styles.hour}>{el.id === 0 ? 'Now' : el.time.slice(11, 13)}</p>
                    <img src={clear_day_img} alt='clear day' />
                    <p className={styles.temp}>{`${Math.round(el.apparent_temperature)} ℃`}</p>
                </div>
            ))}
        </div>
        </>
        
    );
}

export default HourlyForecast;