const express = require('express')
const path = require('path') // A utility for working with file hierarchies
const models = require('./models')

// app setup

const app = express() // create backend app

function serveMainPage(request, response) {
    response.send('This is a lovely lovebird app')
}

function serveTestPage(request, response) {
    response.sendFile(path.join(__dirname, '/index.html'))
}

function createUser(req, res) {
    const {
        firstName,
        lastName,
        dateOfBirth,
        email,
        phoneNumber,
        sex,
        password
    } = req.body

    models.User.create({
        firstName: firstName,
        lastName,
        dateOfBirth,
        email,
        phoneNumber,
        sex,
        password
    })
}


app.get('/', serveMainPage)
app.get('/test', serveTestPage)

// HTTP methods (GET, POST, PUT, DELETE)
// app.get - returns data, but doesn't change anything in the database. Idempotent
// app.post - creates a new entity (normally means creating at least one row in a database). Not idempotent
// app.put - updates an entity. E.g., updates an existing row. Should be idempotent
// app.delete - deletes an entity. Not idempotent

app.post('/api/user', createUser)


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