
const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-z]{8,32}$')
      )
    }
    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'You must provide a valid password'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid information provided'
          })
      }
    } else {
      next()
    }
  }
}
