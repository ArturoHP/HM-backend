const { Sequelize, DataTypes, Model  } = require('sequelize');
const { connection } = require('../../config/db.connection');
const sequelize = connection;

class Unit_Updates extends Model {
    init(){
        Unit_Updates.init( attributes, {
            sequelize,
            modelName: 'unit_updates',
            tableName: 'unit_updates',
            timestamps: false
        });
    }
}

const attributes = {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    plate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    update_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    hq_from: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hq_to: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    return_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }

};

Unit_Updates.init( attributes, {
    sequelize,
    timestamps: false
});

module.exports = Unit_Updates;