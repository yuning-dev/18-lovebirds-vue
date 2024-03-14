// TODO - implement real sessions
// TODO - encrypt passwords

const models = require('../models')

exports.logIn = async (req, res) => {
    // Takes email and password
    // Finds user corresponding to email
    // Checks whether password matches

    // If all checks pass: authorise the user

    const email = req.body.email
    const password = req.body.password

    const user = await models.User.findOne({
        attributes: ['id'],
        where: {
            email: email,
            password: password
        }
    })

    if (user) {
        return res.send({
            id: user.id
        })
    } else {
        return res.sendStatus(401)
    }
}