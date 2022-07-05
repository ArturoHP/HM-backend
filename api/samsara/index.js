const router = require('express').Router();
const moment = require('moment');
const SamsaraService = require('../../services/samsara');


router.get('/', function (req, res) {
    res.status(200).json({ message: 'API EGSYS/Samsara connected' })
});

router.get('/get_vehicles_location_snapshots', async (req,res) => {
    try{
        const samsaraService = new SamsaraService();
        var locations_snapshot = await samsaraService.getLocationsSnapshot();
        res.send(locations_snapshot);
    }catch(ex){
        res.send(ex);
    }
});

router.get('/get_vehicles_stats', async(req,res) => {
    try{
        const samsaraService = new SamsaraService();
        var vehiclesStats = await samsaraService.getVehiclesStats();
        res.send(vehiclesStats);
    }catch(ex){
        res.send(ex);
    }
});

router.get('/get_vehicle_stats',  async(req,res) => {
    try{
        const samsaraService = new SamsaraService();
        var vehicleStats = await samsaraService.getVehicleStats(req.query.vehicleId);
        res.send(vehicleStats);
    }catch(ex){
        res.send(ex);
    }
});

router.get('/get_vehicle_distance_mts', async(req,res) => {
    try{
        const samsaraService = new SamsaraService();
        var vehicleDistanceMts = await samsaraService.getVehicleKmDistanceMts(req.query.vehicleId);
        res.send(vehicleDistanceMts);
    }catch(ex){
        res.send(ex);
    }
});

router.get('/get_fleet_maintenance_list', async (req,res) =>{
    try{
        const samsaraService = new SamsaraService();
        var fleetMaintenanceList = await samsaraService.getFleetMaintenanceList();
        res.send(fleetMaintenanceList);
    }catch(ex){
        res.send(ex);
    }
})

router.get('/get_truck_maintenance_by_samsara_id', async(req,res) => {
    try{
        const samsaraService = new SamsaraService();
        var maintenanceData = await samsaraService.getTruckMaintenanceBySamsaraId(req.query.samsara_id);
        res.send(maintenanceData);
    }catch(ex){
        res.send(ex);
    }
});

router.get('/get_trailers_stats', async(req,res) => {
    try{
        const samsaraService = new SamsaraService();
        var trailersStats = await samsaraService.getTrailersStats();
        res.send(trailersStats);
    }catch(ex){
        res.send(ex);
    }
});



//Se utilizara una sola vez para actualizar los registros en la base de datos
//El numero economico dejara de ser autoincrementable

router.get('/get_list_vehicles', async(req,res) => {
    try{
        const samsaraService = new SamsaraService();
        var listVehicles = await samsaraService.getListVehicles();
        res.send(listVehicles);
    }catch(ex){
        res.send(ex);
    }
});

module.exports = router;