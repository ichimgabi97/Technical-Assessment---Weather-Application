import { useState, useEffect } from "react";

import {getLocations} from '../../API/Geocoding';

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
        <div>
            <input 
                type='text'
                name='city'
                onChange={handleChange}
                value={city}
            />
        </div>
    );
}

export default Search;