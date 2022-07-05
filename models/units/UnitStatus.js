const { Sequelize, DataTypes, Model  } = require('sequelize');
const { connection } = require('../../config/db.connection');
const sequelize = connection;

class UnitStatus extends Model {
    init(){
        UnitStatus.init( attributes, {
            sequelize,
            modelName: 'catalog_unit_status',
            tableName: 'catalog_unit_status',
            timestamps: false
        });
    }
}

const attributes = {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    acron: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: true,
    }

};

UnitStatus.init( attributes, {
    sequelize,
    timestamps: false
});

module.exports = UnitStatus;