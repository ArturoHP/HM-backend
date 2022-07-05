const router = require('express').Router()
const dotenv = require('dotenv');
const response = require('../../helpers/response');
dotenv.config();

const UnitsRepository = require('../../repositories/units/UnitsRepository')

router.get('/',(req,res) => {
    res.status(200).json({ message: 'API EGSYS/Units connected' })
});

router.get('/get_all_available_units',async (req,res) => {
    try{
        const units_rep = new UnitsRepository();
        var units = await units_rep.getAllUnits();
        res.send(response.success(units));
    }catch(ex){
        res.send(response.error(ex));
    }
});

router.get('/get_units_by_status_acron',async(req,res) => {
    try{
        const units_rep = new UnitsRepository();
        var units = await units_rep.getUnitsByStatusAcron(JSON.parse(req.query.acrons));
        res.send(response.success(units));
    }catch(ex){
        res.send(response.error(ex));
    }
});

router.get('/get_units_by_headquarter_id',async(req,res) => {
    try{
        const units_rep = new UnitsRepository();
        var selectedUnits = await units_rep.getUnitsByHeadquarterId(req.query.headquarters_id);
        res.send(response.success(selectedUnits));
    }catch(ex){
        res.send(response.error(ex));
    }
});

router.post('/update_unit',async(req,res) => {
    try{
        const units_rep = new UnitsRepository();
        var selectedUnit = await units_rep.updateUnitLocation(req.body);
        res.send(response.success(selectedUnit));
    }catch(ex){
        res.send(response.error(ex))
    }
});

router.post('/update_unit_to_maintenance',async(req,res) => {
    try{
        const units_rep = new UnitsRepository();
        var selectedUnit = await units_rep.updateUnitToMaintenance(req.body);
        res.send(response.success(selectedUnit));
    }catch(ex){
        res.send(response.error(ex))
    }
});



module.exports = router;