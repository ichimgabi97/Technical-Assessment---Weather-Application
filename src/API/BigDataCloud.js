import axios from 'axios';

export const getLocationName = async ({latitude, longitude}) =>{
    const URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&^longitude=${longitude}`;
    
    const locationsName =await axios.get(URL)
    .then(response =>response.data)
    .catch(function (error){
        console.log(error);
    })

    console.log(locationsName.city);
    return locationsName.city;
}