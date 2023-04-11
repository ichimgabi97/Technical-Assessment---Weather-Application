import clear_day_img from '../assets/clear-day.png';
import clear_night_img from '../assets/clear-night.png';
import partly_cloudy_day_img from '../assets/partly-cloudy-day.png';
import partly_cloudy_night_img from '../assets/partly-cloudy-night.png';
import cloudy_img from '../assets/cloudy.png';
import overcast_img from '../assets//overcast.png';
import fog_img from '../assets/fog.png';
import showers_img from '../assets/showers.png';
import heavy_showers_img from '../assets/heavy-showers.png';
import thunderstorm_showers_img from '../assets/thunderstorm-showers.png';
import sleet_img from '../assets/sleet.png';
import heavy_sleet from '../assets/heavy-sleet.png';
import snow_img from '../assets/snow.png';
import heavy_snow_img from '../assets/heavy-snow.png';
import thunderstorm_snow_img from '../assets/thunderstorm-snow.png';


const weather_codes = [
    {
        id: 0,
        is_day: [1],
        weathercode: [0],
        image: clear_day_img,
        alt: 'clear day'
    },
    {
        id: 1,
        is_day: [0],
        weathercode: [0],
        image: clear_night_img,
        alt: 'clear night'
    },
    {
        id: 2,
        is_day: [1],
        weathercode: [1],
        image: partly_cloudy_day_img,
        alt: 'mainly clear'
    },
    {
        id: 3,
        is_day: [0],
        weathercode: [1],
        image: partly_cloudy_night_img,
        alt: 'mainly clear'
    },
    {
        id: 4,
        is_day: [1, 0],
        weathercode: [2],
        image: cloudy_img,
        alt: ' partly cloudy'
    },
    {
        id: 5,
        is_day: [1, 0],
        weathercode: [3],
        image: overcast_img,
        alt: 'overcast'
    },
    {
        id: 6,
        is_day: [1, 0],
        weathercode: [45, 48],
        image: fog_img,
        alt: 'fog'
    },
    {
        id: 7,
        is_day: [1, 0],
        weathercode: [51, 61, 80],
        image: showers_img,
        alt: 'rain light'
    },
    {
        id: 8,
        is_day: [1, 0],
        weathercode: [53, 63, 81],
        image: heavy_showers_img,
        alt: 'rain moderate'
    },
    {
        id: 9,
        is_day: [1, 0],
        weathercode: [55, 65, 82, 95],
        image: thunderstorm_showers_img,
        alt: 'rain heavy'
    },
    {
        id: 10,
        is_day: [1, 0],
        weathercode: [56, 66, 96, 77],
        image: sleet_img,
        alt: 'sleet'
    },
    {
        id: 11,
        is_day: [1, 0],
        weathercode: [57, 67],
        image: heavy_sleet,
        alt: 'heavy sleet'
    },
    {
        id: 12,
        is_day: [1, 0],
        weathercode: [71, 85],
        image: snow_img,
        alt: 'snow'
    },
    {
        id: 13,
        is_day: [1, 0],
        weathercode: [73, 75, 86],
        image: heavy_snow_img,
        alt: 'heavy snow'
    },
    {
        id: 14,
        is_day: [1, 0],
        weathercode: [99],
        image: thunderstorm_snow_img,
        alt: 'thunderstorm snow'
    }
];

export const getWeatherImageData = (code, isDay) =>{
    //console.log([code, isDay]);
    let result = weather_codes.filter(el => el.weathercode.includes(code)).filter(el => el.is_day.includes(isDay));
    return result;
    
}