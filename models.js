const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('sqlite::memory:')

exports.User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING, // Could be encrypted
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    sex: {
        type: DataTypes.STRING // Could be a foreign key referencing a Sex table
    },
    password: {
        type: DataTypes.STRING // Would need to be hashed
    }
})
