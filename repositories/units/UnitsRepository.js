const Units = require('../../models/units/Units');
const UnitStatus = require('../../models/units/UnitStatus');
const UnitUpdates = require('../../models/units/UnitUpdates');
const response = require('../../helpers/response');
const BaseRepository = require('../../repositories/BaseRepository');

const { Sequelize  } = require('sequelize');

class UnitsRepository extends BaseRepository {
	constructor() {
        super(Units)
	}


    getAllUnits(){
        return new Promise((res,rej) => {
            Units.findAll().then((allUnits) => {
                res(allUnits);
            },(err) => {
                rej(err);
            })
        });
    }

    getUnitsByStatusAcron(acrons){
        return new Promise((res,rej) => {
            Units.findAll({
                where: {
                    status: acrons
                }
            }).then((allUnits) => {
                res(allUnits);
            },(err) => {
                rej(err);
            })
        });
    }

    getUnitsByHeadquarterId(headquarterId){
        return new Promise((res,rej) => {
            Units.findAll(
                {where: {
                    headquarters: headquarterId
                }}
            ).then((selectedUnits) => {
                res(selectedUnits);
            },(err) => {
                rej(err);
            })
        });
    }

    updateUnitLocation(data){
        return new Promise(async(res,rej) => {
            try{
                var unit = await Units.findByPk(data.plate);
                await UnitUpdates.create(data);

                unit.update({headquarters: data.hq_to}).then((updateResponse) => {
                    res({updateResponse: updateResponse});
                },(err) => {
                    rej(err);
                })
            }catch(ex){
                rej(ex);
            }
        });
    }

    updateUnitToMaintenance(data){
        return new Promise(async(res,rej) => {
            var unit = await Units.findByPk(data.updateData.plate);
            await UnitUpdates.create(data.updateData);

            unit.update({ headquarters: data.updateData.hq_to, status: data.typeMaintenance }).then((updateResponse) => {
                res({ updateResponse: updateResponse });
            }, (err) => {
                rej(err);
            })
        });
    }


}


module.exports = UnitsRepository;