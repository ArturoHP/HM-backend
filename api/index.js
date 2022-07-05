const router = require('express').Router();
    samsara = require('./samsara')
    weather_api = require('./weather-api')
    users = require('./users')
    units = require('./units')
const dotenv = require('dotenv');
dotenv.config();


try{
    router.use('/samsara',samsara);
    router.use('/weather',weather_api);
    router.use('/users',users);
    router.use('/units',units);
}catch(ex){
    res.status(404).json({message: 'Route not found'});
}

router.get('/', function (req, res) {
    res.status(200).json({ message: 'API EGSYS connected' })
});


module.exports = router;
