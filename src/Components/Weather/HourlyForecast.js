import { useState, useEffect } from 'react';

import styles from './HourlyForecast.module.css';

import clear_day_img from '../../assets/clear-day.png';
import arrow_right from '../../assets/Carret_Right.png';
import arrow_left from '../../assets/Carret_Left.png';

const HourlyForecast = (props) =>{
    // console.log(props.hourly);
    // console.log(props.daily);

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
        setInterval(() => {
            setHourlyList(getHourlyList(props.hourly, props.daily));
        }, 60000);
        
        //console.log('--------------------------')
        //console.log(hourlyList);
    }, []);

    const handleClickLeft = () =>{
        if(startHourIndex - 1 >= 0){
            setStartHourIndex(startHourIndex - 1);
        }
    }

    const handleClickRight = () =>{
        if(startHourIndex + 9 <= hourlyList.length){
            setStartHourIndex(startHourIndex + 1);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.button} onClick={handleClickLeft}>
                <div className={`${styles.circle}`}>
                    <img src={arrow_left} alt='arrow left'/>
                </div>
            </div>
            {hourlyList.slice(startHourIndex, startHourIndex + 8).map(el =>(
                <div className={styles.container_hourly} key={el.id}>
                    <p className={styles.hour}>{el.id === 0 ? 'Now' : el.time.slice(11, 13)}</p>
                    <img src={clear_day_img} alt='clear day' />
                    <p className={styles.temp}>{`${Math.round(el.apparent_temperature)} ℃`}</p>
                </div>
            ))}
            <div className={styles.button} onClick={handleClickRight}>
                <div className={`${styles.circle}`}>
                    <img src={arrow_right} alt='arrow right'/>
                </div>
            </div>
        </div>
    );
}

export default HourlyForecast;