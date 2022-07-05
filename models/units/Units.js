const { Sequelize, DataTypes, Model  } = require('sequelize');
const { connection } = require('../../config/db.connection');
const sequelize = connection;

class Units extends Model {
    init(){
        Units.init( attributes, {
            sequelize,
            modelName: 'units',
            tableName: 'units',
            timestamps: false
        });
    }
}

const attributes = {
    noecon: {
        type: DataTypes.STRING,
        allowNull: true
    },
    past_noecon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    line: {
        type: DataTypes.STRING,
        allowNull: true
    },
    unit_config: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    plate: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    serie: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    headquarters: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    headquarters_manager: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    samsara: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    clasification: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    client_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    samsara_device: {
        type: DataTypes.STRING,
        allowNull: true
    }

};

Units.init( attributes, {
    sequelize,
    timestamps: false
});

module.exports = Units;