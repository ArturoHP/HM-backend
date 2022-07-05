const dotenv = require('dotenv');
dotenv.config();

const sdkSamsara = require('api')('@samsara-dev-rel/v2019.01.01#4lnu31l1l8o7rn');
sdkSamsara.auth(process.env.samsara_api_token);

class SamsaraService {

    getLocationsSnapshot(){
        return new Promise((res,rej) => {
            sdkSamsara.getVehicleLocations().then((response) => {
                res(response);
            },(err) => {
                rej(err);
            })
        });
    }

    getVehiclesStats(){
        return new Promise((res,rej) => {
            sdkSamsara.getVehicleStats({types: 'gps,fuelPercents,engineStates'}).then((response) => {
                res(response);
            },(err) => {
                rej(err);
            })
        });
    }

    getVehicleStats(vehicleId){
        return new Promise((res,rej) => {
            sdkSamsara.getVehicleStats({types: 'gps,fuelPercents,engineStates'}).then((response) => {
                response.data.forEach((element) => {
                    if(String(element['name']).includes(vehicleId) && !String(element['name']).toLowerCase().includes("baja")){
                        res(element);
                    }
                });   
            },(err) => {
                rej(err);
            })
        });
    }
    getVehicleKmDistanceMts(vehicleId){
        return new Promise((res,rej) => {
            sdkSamsara.getVehicleStats({types: 'gpsOdometerMeters,gpsOdometerMeters,obdOdometerMeters'}).then((response) => {
                response.data.forEach((element) => {
                    if(String(element['name']).includes(vehicleId)){
                        res(element);
                    }
                });   
            },(err) => {
                rej(err);
            })
        });
    }

    getListVehicles(){
        return new Promise((res,rej) => {
            sdkSamsara.listVehicles().then((response) => {
                res(response);
            },(err) => {
                rej(err);
            })
        });
    }

    getFleetMaintenanceList(){
        return new Promise((res, rej) => {
            sdkSamsara.V1getFleetMaintenanceList().then((response) => {
                res(response);
            },(error) => {
                rej(error);
            })
        });
    }
    //get_truck_maintenance_by_samsara_id
    getTruckMaintenanceBySamsaraId(samsara_id){
        return new Promise((res,rej) => {
            sdkSamsara.V1getFleetMaintenanceList().then((response) => {
                response.vehicles.forEach((element) => {
                    if(String(element['id']) == String(samsara_id)){
                        res(element);
                    }
                });     
            },(err) => {
                rej(err);
            })
        });
    }

    getTrailersStats(){
        return new Promise((res,rej) => {
            sdkSamsara.getTrailerStatsSnapshot({types: 'gps'}).then((response) => {
                res(response);
            },(error) => {
                rej(error);
            });
        });
    }

}

module.exports = SamsaraService;