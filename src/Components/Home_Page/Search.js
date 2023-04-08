import { useState, useEffect } from "react";

import {getLocations} from '../../API/Geocoding';

import styles from './Search.module.css';

const Search = (props) => {

    const [city, setCity] = useState('');

    useEffect(() => {
        setCity('');
    }, [props.value]);

    const handleChange = (e) =>{
        setCity(e.target.value);
        //console.log(e.target.value);
    }

    const LogApi = async (cityName) =>{
        if(cityName.length >= 2){
            props.changeListHandle( await getLocations(cityName));
        }else{
            props.changeListHandle([]);
        }
    }

    useEffect(() => {
        const timeOutId = setTimeout(() => LogApi(city), 500);
        return () => clearTimeout(timeOutId);
    }, [city]);

    return(
        <div className={styles.container}>
            <input
                className={styles.search_input}
                autoComplete='off' 
                type='text'
                name='city'
                onChange={handleChange}
                value={city}
            />
        </div>
    );
}

export default Search;