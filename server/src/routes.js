const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationValidations = require('./policies/AuthenticationValidation')

module.exports = (app) => {
  app.post('/register',
    AuthenticationValidations.register,
    AuthenticationController.register)
}
