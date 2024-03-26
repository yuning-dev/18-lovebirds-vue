const path = require('path') // A utility for working with file hierarchies
const models = require('../models')
const { Sequelize } = require('sequelize')

const Op = Sequelize.Op

exports.serveMainPage = (request, response) => {
    response.send('This is a lovely lovebird app')
}

exports.serveTestPage = (request, response) => {
    response.sendFile(path.join(__dirname, '/index.html'))
}

exports.createUser = async (req, res) => {
    console.log('Hello, I started')
    const {
        firstName,
        lastName,
        dateOfBirth,
        email,
        sex,
        password
    } = req.body

    // TODO - Jordan to add validation middleware 

    console.log('Hello, I did something')

    const user = await models.User.create({
        firstName: firstName,
        lastName,
        dateOfBirth,
        email,
        sex,
        password
    })
    
    console.log('Hello, I made it')

    console.log('The created user is')
    console.log(user)
    
    const formattedUserData = {
        ...user.dataValues
    }

    delete formattedUserData.password

    // TODO - try sending a primitive and an array and see what happens
    return res.send(formattedUserData)
}

exports.getUserDetails = async (req, res) => {
    const userId = req.params.userId

    models.User.findOne({
        attributes: ['firstName', 'lastName', 'dateOfBirth'],

    })
}

exports.searchUsers = async (req, res) => {
    const { sex, age } = req.body

    console.log(req.body)

    models.User.findAll({
        attributes: [
            'firstName',
            'lastName',
            'dateOfBirth',
            [Sequelize.literal("cast(strftime('%Y.%m%d', 'now') - strftime('%Y.%m%d', dateOfBirth) as int)"), 'age'],
        ],
        where: {
            sex: sex,
            [Op.or]: [
                {
                    'age': {
                        [Op.gte]: 18,
                        [Op.lte]: 25
                    }
                },
                {
                    'age': {
                        [Op.gte]: 26,
                        [Op.lte]: 35
                    }
                }
            ]
        },
        limit: 20,
        order: [['createdAt', 'DESC']]
    })
}

// Writing endpoints:
// Add route
// Add function
// Figure out what you need from the frontend
// Write DB query
// Return results