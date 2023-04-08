import axios from 'axios';

const URL = 'https://api.open-meteo.com/v1/forecast';

export const getWeatherFormCoords = async (placeLatitude, placeLongitude)=>{
    if(placeLatitude && placeLongitude){
        //console.log(`From open meteo API: placeLatitude - ${placeLatitude}, placeLongitude - ${placeLongitude}`);
        const weather = await axios.get(URL,{
            params: {
                latitude: placeLatitude,
                longitude: placeLongitude,
                current_weather: true,
                hourly: 'temperature_2m',
                daiy: 'sunrise',
                forecast_days: 7,
                timezone: 'auto'
            }
        })
        .then(response =>response.data)
        .catch(function (error){
            console.log(error);
        })

        //console.log(weather);
        return weather;
    }
    
}