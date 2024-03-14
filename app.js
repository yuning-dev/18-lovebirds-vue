const express = require('express')
const bodyParser = require('body-parser')
const path = require('path') // A utility for working with file hierarchies
const cors = require('cors')
const models = require('./models')

// app setup

const app = express() // create backend app

// This is adding middleware to your endpoints
// Middleware pre-processes or validates requests before your endpoint function runs
app.use(bodyParser.json())

function serveMainPage(request, response) {
    response.send('This is a lovely lovebird app')
}

function serveTestPage(request, response) {
    response.sendFile(path.join(__dirname, '/index.html'))
}

async function createUser(req, res) {
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

function getUser(req, res) {
    return res.send({ id: 111 }).status(200)
}


app.get('/', serveMainPage)
app.get('/test', serveTestPage)

// HTTP methods (GET, POST, PUT, DELETE)
// app.get - returns data, but doesn't change anything in the database. Idempotent
// app.post - creates a new entity (normally means creating at least one row in a database). Not idempotent
// app.put - updates an entity. E.g., updates an existing row. Should be idempotent
// app.delete - deletes an entity. Not idempotent

app.post('/api/user', createUser)

app.get('/api/user', getUser)


// run the app

app.listen(8000, function () {
    console.log("I'm listening on port 8000 now, sue me")
})


/* Example of what Express is kinda doing when you set up endpoints

const endpoints = {
    get: {
        '/': serveMainPage
    },
    post: {

    }
}

function serveEndpoint(httpMethod, path) {
    const request = new Request()
    const response = new Response()
    
    const yourFunction = endpoints[httpMethod][path]
    yourFunction(request, response)
}


*/