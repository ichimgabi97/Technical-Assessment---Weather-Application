import { useState, useEffect } from "react";

import Search from "./Search";
import ListOfCitys from "./ListOfCitys";
import Weather from "./Weather";
import Background from "../UI/Background";
import Overlay from "../UI/Overlay";
import FavoriteLocations from "./FavoriteLocations";

import { getLocationName } from '../../API/BigDataCloud';
import { getWeatherFormCoords } from "../../API/OpenMeteo";

import styles from './Home.module.css';

const Home = ()=>{
    const [selectedCity, setSelectedCity] = useState({name: '', latitude: 0, longitude: 0});
    const [searchResult, setSearchResult] = useState([]);
    const [cleanInput, setCleanInput] = useState(true);
    const [locationCity, setLocationCity] = useState({});
    const [weather, setWeather] = useState({});
    const [overlay, setOverlay] = useState(false);
    const [favoriteLocations, setFavoriteLocations] = useState([]);
    const [favoriteLocationSelected, setFavoriteLocationSelected] = useState({});
    const [overlayFavorite, setOverlayFavorite] = useState(false);

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

    const handleClick = (city) =>{
        setSelectedCity({
            name: city.name, 
            latitude: city.latitude, 
            longitude: city.longitude
        });
        //console.log(selectedCity);
        setSearchResult([]);
        setCleanInput(!cleanInput);
        setOverlay(!overlay);
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
    
    const handleExit = () =>{
        setOverlay(!overlay);
    }

    const containsObject = (obj) => {
        for (let i = 0; i < favoriteLocations.length; i++) {
            if (favoriteLocations[i].name === obj.name) {
                return true;
            }
        }
        return false;
    }

    const handleAddFavorite = (el) =>{
        if(!containsObject(el)){
            setFavoriteLocations((prevState) => [...prevState, el]);
        }
        setOverlay(!overlay);
    }

    const handleDelete = (location) =>{
        setFavoriteLocations(favoriteLocations.filter(el => el !== location));
    }

    const displayLocation = (location) =>{
        setFavoriteLocationSelected(location);
        setOverlayFavorite(!overlayFavorite);
    }

    const handleExitFavorite = () =>{
        setOverlayFavorite(!overlayFavorite);
    }

    return(
        <>
            <Background weatherInfo = {weather}>
                {overlayFavorite && (
                    <Overlay searchedCity = {favoriteLocationSelected} exitHandle={handleExitFavorite} addToFavorite={handleAddFavorite} showAdd = {false}/>
                )}
                {overlay && (
                    <Overlay searchedCity = {selectedCity} exitHandle={handleExit} addToFavorite={handleAddFavorite} showAdd = {true}/>
                )}
                {(!overlay && !overlayFavorite) && (
                    <>
                        <Search value = {cleanInput} changeListHandle = {handleChangeList} />
                        <ListOfCitys list={searchResult} clickHandle={handleClick}/>
                        {favoriteLocations.length !== 0 ? (
                            <FavoriteLocations favoriteList = {favoriteLocations} removeLocation={handleDelete} selectedLocation={displayLocation}/>
                        ) : undefined}
                        <Weather currentPosition = {locationCity} weatherInfo = {weather}/>
                    </>
                )}
                
            </Background>
        </>
    );
}

export default Home;