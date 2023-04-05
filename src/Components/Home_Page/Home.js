import { useState, useEffect } from "react";

import Search from "./Search";
import {getLocationName} from '../../API/BigDataCloud';

const Home = ()=>{
    const [selectedCity, setSelectedCity] = useState({name: '', latitude: 0, longitude: 0});
    const [searchResult, setSearchResult] = useState([]);
    const [cleanInput, setCleanInput] = useState(true);
    const [locationCity, setLocationCity] = useState({});

    useEffect(() =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition( position => setLocationCity({latitude: position.coords.latitude, longitude: position.coords.longitude}), err => alert(err.message));
        }else{
            console.log('Geolocation is not suported by your browser');
        }
    }, []);

    const handleClick = ({name, latitude, longitude}) =>{
        setSelectedCity({name, latitude, longitude});
        setSearchResult([]);
        setCleanInput(!cleanInput);
    }

    const handleChangeList = (list) =>{
        setSearchResult(list);
    }

    const getLocationNameFromCoords = async () =>{
        const cityName = await getLocationName(locationCity);
        setLocationCity({
            name: cityName,
            latitude: locationCity.latitude, 
            longitude: locationCity.longitude
        })
    }

    useEffect(() =>{
        getLocationNameFromCoords();
    },[]);
    
    return(
        <>
            <Search
                value = {cleanInput} 
                changeListHandle = {handleChangeList}
            />
            <div>
                <ul>
                    {searchResult.map(el=> (
                        <li 
                          key={el.id}
                          onClick={() => handleClick(el)}
                        >
                            {`${el.name}, ${el.country}`}
                        </li>
                    ))}
                </ul>

                <div>{`${selectedCity.name}, ${selectedCity.latitude}, ${selectedCity.longitude}`}</div>
                <div>{`${locationCity.latitude}, ${locationCity.longitude}, ${locationCity.name}`}</div>
                <div>{}</div>
            </div>
        </>
    );
}

export default Home;