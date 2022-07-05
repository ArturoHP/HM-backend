const { Sequelize, Op  } = require('sequelize');

class BaseRepository {
    model = null;

    constructor(model){
        this.model = model;
        this.sequelize = Sequelize;
    }

    findAll(){
        return new Promise((resolve, reject) => {
            this.model.findAll().then((result) => {
                resolve(result);
            }).catch((err)=>{
                reject(err);
            })
        });
     }

    findByCustomId(value, key, raw=false) {
        return new Promise((resolve, reject) => {
            this.model.findOne({ where: { [key]: value }, raw: raw }).then((result) => {
                resolve(result);
            }).catch((err)=>{
                reject(err);
            })
        });
    }

    findByCustomIdAll(value, key, raw = true) {
        return new Promise((resolve, reject) => {
            this.model.findAll({ where: { [key]: value }, raw: raw }).then((result) => {
                resolve(result);
            }).catch((err)=>{
                reject(err);
            })
        });
    }

    findById(id, raw = true) {
        return new Promise((resolve, reject) => {
            this.model.findOne( { raw: raw, where: { id } }).then((result) => {
                resolve(result);
            }).catch((err)=>{
                reject(err);
            })
        });
    }

    create(values){
        return new Promise((resolve, reject) => {
            this.model.create(values).then((result) => {
                resolve(result);
            }).catch((err)=>{
                reject(err);
            })
        });
    }


    update(values){
        console.log("values", values);
        return new Promise((resolve, reject) => {
            this.model.findOne({ where: values.id })
            .then(function(obj) {
                if (obj) resolve(obj.update(values.dataValues ? values.dataValues : values));
            }).catch((err)=>{
                reject(err);
            })
        });

    }

    delete(id){
        return new Promise((resolve, reject) => {
            this.model.destroy({ where: {id: id} })
                .then(function(result) {
                    resolve(result)
                }).catch((err)=>{
                reject(err);
            })
        });
    }

    async bulk(values){
        return new Promise((resolve,reject) => {
            this.model.bulkCreate(values).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    async deleteMassive(values){
        return new Promise((resolve,reject) => {
            this.model.delete({where: values}).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    getParams(config, status){
        return{
            status: status == 6 ? {[Op.gte]: 0} : config.status,
            date: ((config.fromDate != null && config.fromDate != "" )
              && (config.toDate != null && config.toDate != "")) ? {
                [Op.between] : [config.fromDate, config.toDate]
            } : {
                [Op.gte] : '1971-01-01'
            }
        };
    }

}

module.exports = BaseRepository;
