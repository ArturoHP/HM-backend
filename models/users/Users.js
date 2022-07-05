const { Sequelize, DataTypes, Model  } = require('sequelize');
const { connection } = require('../../config/db.connection');
const sequelize = connection;

class Users extends Model {
    init(){
        Users.init( attributes, {
            sequelize,
            modelName: 'users',
            tableName: 'users',
            timestamps: false
        });
    }
}

const attributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    
};

Users.init( attributes, {
    sequelize,
    timestamps: false
});

module.exports = Users;