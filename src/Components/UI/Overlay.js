import { useState, useEffect } from "react";

import Weather from "../Home_Page/Weather";
import { getWeatherFormCoords } from "../../API/OpenMeteo";

import styles from './Overlay.module.css';
import exit_img from '../../assets/Exit.png';

const Overlay = (props) =>{

    const [weather, setWeather] = useState({})

    const getWeather = async () =>{
        setWeather(await getWeatherFormCoords( props.searchedCity.latitude, props.searchedCity.longitude));
    }

    useEffect(()=>{
        if(props.searchedCity.name !== ''){
            getWeather();
        }
    },[props.searchedCity]);

    const handleAddClick = () =>{
        props.addToFavorite(props.searchedCity);
    }

    if(props.searchedCity.name !== ''){
        return(
            <section className={styles.container}>
                <div className={styles.controls}>
                    {props.showAdd && (
                        <div className={styles.add} onClick={handleAddClick}>
                            <p>Add</p>
                        </div>
                    )}
                    <div className={styles.exit} onClick={props.exitHandle}>
                        <img src={exit_img} alt='exit'/>
                    </div>
                </div>
                <Weather currentPosition={props.searchedCity} weatherInfo={weather}/>
            </section>
        );
    }
}

export default Overlay;