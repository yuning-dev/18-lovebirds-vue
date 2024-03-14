const path = require('path') // A utility for working with file hierarchies
const models = require('../models')

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

exports.getUser = (req, res) => {
    return res.send({ id: 111 }).status(200)
}