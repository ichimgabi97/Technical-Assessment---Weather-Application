# Technical-Assessment---Weather-Application

You can see the application on: https://www.ichimgabi.tech

Inspiration: 
  - apple weather app
  - microsoft weather app
  - weather icons: https://www.figma.com/community/file/1028044423168519795/Degry-Weather-Iconset
  - compass component: https://codepen.io/nhereveri/pen/zYENBoB

Futures:
  - the application sends the current location to open meto API ( https://open-meteo.com/en/docs ) and retrieves the weather
  - the search is using the Geocoding API ( https://open-meteo.com/en/docs/geocoding-api#api-documentation ) to give a list of possible location baseed on what the user entered, after that the BigData API ( https://www.bigdatacloud.com/docs ) provides the location name based on coords
  - the weather information for user location is updated every minute
  - the different icons for weather are displayed based on the weathercode recieved from the API
  - there are two themes for the application ( day/ night ), based on the sunrise and sunset
  - the user can search for any location's weather, and can add/ remove that location from favorites
  - clicking on a favorite location, an overlay modal opens with information about weather
  - the application shows the weather for the next 24 hours and for the next week

Improvements:
  - icons for all the weathercodes
  - themes for all combinations between weather and period of the day
  - a more efficient way of updating the information on weather
  - the icons/ current time on the 24 hours forecast on search locations to depend on the location time zone
  - to repair some bugs that appear on the iphone  
