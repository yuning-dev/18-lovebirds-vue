const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

exports.User = sequelize.define('Users', {
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
    sex: {
        type: DataTypes.STRING // Could be a foreign key referencing a Sex table
    },
    password: {
        type: DataTypes.STRING // Would need to be hashed
    }
})

sequelize.sync()

// const generateUsers = () => {}

// exports.User.bulkCreate([
//     {
//         firstName: 'Jessica',
//         ...
//     },
//     {
//         ...
//     }
// ])

// TODO - read on Getters, setters and virtuals: https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/