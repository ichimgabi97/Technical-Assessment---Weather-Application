import axios from 'axios';

const URL = 'https://geocoding-api.open-meteo.com/v1/search';

export const getLocations = async (cityName) =>{
    const locations = await axios.get(URL,{
        params: {
            name: cityName,
            count: 10,
            format: 'json',
            language: 'en'
        }
    })
    .then(response =>response.data)
    .catch(function (error){
        console.log(error);
    })

    return locations.results;
}