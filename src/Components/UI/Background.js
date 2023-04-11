import { useEffect, useState } from 'react';

import styles from './Background.module.css';

const Background = (props) =>{
    const [isDay, setIsDay] = useState(true);

    useEffect(() =>{
        if(props.weatherInfo.current_weather.is_day === 0){
            setIsDay(false);
        }else{
            setIsDay(true);
        }
    },[]);
    
    return(
        <main className={`${styles.container} ${isDay ? styles.day : styles.night}`}>
            {props.children}
        </main>
    );
}

export default Background;