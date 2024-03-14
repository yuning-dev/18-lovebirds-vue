const api = require('./api')
const auth = require('./auth')

exports.applyRoutes = (app) => {
    app.get('/', api.serveMainPage)
    app.get('/test', api.serveTestPage)

    // HTTP methods (GET, POST, PUT, DELETE)
    // app.get - returns data, but doesn't change anything in the database. Idempotent
    // app.post - creates a new entity (normally means creating at least one row in a database). Not idempotent
    // app.put - updates an entity. E.g., updates an existing row. Should be idempotent
    // app.delete - deletes an entity. Not idempotent

    app.post('/api/user', api.createUser)

    app.get('/api/user', api.getUser)

    app.post('/api/auth/log-in', auth.logIn)
}