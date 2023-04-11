import { useEffect, useState } from 'react';

import styles from './Background.module.css';

const Background = (props) =>{
    const [isDay, setIsDay] = useState(true);

    useEffect(() =>{
        try{
            if(props.weatherInfo.current_weather.is_day === 0){
                setIsDay(false);
            }else{
                setIsDay(true);
            }
        }catch{
        }
    },[props.weatherInfo]);
    
    return(
        <main className={`${styles.container} ${isDay ? styles.day : styles.night}`}>
            {props.children}
        </main>
    );
}

export default Background;