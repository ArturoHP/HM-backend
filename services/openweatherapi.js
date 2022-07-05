const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios')

const urlWeatherApi = 'https://api.openweathermap.org/data/2.5/weather'

const lang = 'es';
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

class OpenWeatherApi {
    
    async getLocationWeather(lat,lon){
        return new Promise((res,rej) => {
            
            var url = urlWeatherApi + `?lat=${lat}&lon=${lon}&appid=${process.env.open_weather_api_token}&lang=${lang}`;
            axios.get(url)
                .then((response) => {
                    res(response);
                })
                .catch((error) => {
                   rej(error);
                })
        });
    }
}

module.exports = OpenWeatherApi;