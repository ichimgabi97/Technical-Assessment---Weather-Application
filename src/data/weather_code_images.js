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

const default_image = {
    is_day: true,
    weather_code: 0,
    image: clear_day_img,
    alt: 'clear day'
};

const weather_codes = [
    {
        id: 0,
        is_day: true,
        weather_code: 0,
        image: clear_day_img,
        alt: 'clear day'
    },
    {
        id: 1,
        is_day: false,
        weather_code: 0,
        image: clear_night_img,
        alt: 'clear night'
    },
    {
        id: 2,
        is_day: true,
        weather_code: 1,
        image: partly_cloudy_day_img,
        alt: 'mainly clear'
    },
    {
        id: 3,
        is_day: false,
        weather_code: 1,
        image: partly_cloudy_night_img,
        alt: 'mainly clear'
    },
    {
        id: 4,
        is_day: true,
        weather_code: 2,
        image: cloudy_img,
        alt: 'partly cloudy'
    },
    {
        id: 5,
        is_day: false,
        weather_code: 2,
        image: cloudy_img,
        alt: 'partly cloudy'
    },
    {
        id: 6,
        is_day: true,
        weather_code: 3,
        image: overcast_img,
        alt: 'overcast'
    },
    {
        id: 7,
        is_day: false,
        weather_code: 3,
        image: overcast_img,
        alt: 'overcast'
    },
    {
        id: 8,
        is_day: true,
        weather_code: 45,
        image: fog_img,
        alt: 'fog'
    },
    {
        id: 9,
        is_day: false,
        weather_code: 45,
        image: fog_img,
        alt: 'fog'
    },
    {
        id: 10,
        is_day: true,
        weather_code: 48,
        image: fog_img,
        alt: 'depositing rime fog'
    },
    {
        id: 11,
        is_day: false,
        weather_code: 48,
        image: fog_img,
        alt: 'depositing rime fog'
    },
    {
        id: 12,
        is_day: true,
        weather_code: 51,
        image: ,
        alt: 'drizzle light'
    }
];