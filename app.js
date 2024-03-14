const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

// app setup

const app = express() // create backend app

// This is adding middleware to your endpoints
// Middleware pre-processes or validates requests before your endpoint function runs
app.use(bodyParser.json())

// Add routes to the app

routes.applyRoutes(app)

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