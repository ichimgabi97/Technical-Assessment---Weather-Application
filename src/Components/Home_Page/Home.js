import { useState, useEffect } from "react";

import Search from "./Search";
import ListOfCitys from "./ListOfCitys";
import Weather from "./Weather";
import Background from "../UI/Background";

import { getLocationName } from '../../API/BigDataCloud';
import { getWeatherFormCoords } from "../../API/OpenMeteo";

import styles from './Home.module.css';

const Home = ()=>{
    const [selectedCity, setSelectedCity] = useState({name: '', latitude: 0, longitude: 0});
    const [searchResult, setSearchResult] = useState([]);
    const [cleanInput, setCleanInput] = useState(true);
    const [locationCity, setLocationCity] = useState({});
    const [weather, setWeather] = useState({});

    useEffect(() =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition( position => setLocationCity({latitude: position.coords.latitude, longitude: position.coords.longitude}), err => alert(err.message));
        }else{
            console.log('Geolocation is not suported by your browser');
        }
        getLocationNameFromCoords();
        setInterval(() => {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition( position => setLocationCity({latitude: position.coords.latitude, longitude: position.coords.longitude}), err => alert(err.message));
            }else{
                console.log('Geolocation is not suported by your browser');
            }
            getLocationNameFromCoords();
        }, 60000);
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
        setLocationCity((prevState) => ({
            name: cityName,
            ...prevState
        }))
    }

    const getWeather = async () =>{
        setWeather(await getWeatherFormCoords(locationCity.latitude, locationCity.longitude));
    }

    useEffect(() =>{
        getWeather();
    }, [locationCity]); 
    
    return(
        <>
            <Background>
                <Search value = {cleanInput} changeListHandle = {handleChangeList} />
                <ListOfCitys list={searchResult} clickHandle={handleClick}/>
                <Weather currentPosition = {locationCity} weatherInfo = {weather}/>
            </Background>
        </>
    );
}

export default Home;