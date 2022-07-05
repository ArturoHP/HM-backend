const router = require('express').Router()
const dotenv = require('dotenv');
dotenv.config();

const WeatherApiService = require('../../services/openweatherapi');

router.get('/',(req,res) => {
    res.status(200).json({ message: 'API EGSYS/WeatherApi connected' })
});

router.get('/get_location_weather',async (req,res) => {
    try{
        const weather_api = new WeatherApiService();
        var weatherOnLocation = await weather_api.getLocationWeather(req.query.lat,req.query.lon);
        res.send(weatherOnLocation);
    }catch(ex){
        res.send(ex);
    }
});

module.exports = router;