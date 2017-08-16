'use strict'
const configDatabase = require('./util_model/connect')
const models = configDatabase.mongoose
const Schema = models.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')
const val = require('./util_model/validator.js')
const timestamps = require('mongoose-timestamp')
const UserShema = new Schema({
  name: {type: String, required: [true, 'Required']},
  last_name: {type: String, required: [true, 'Required']},
  business: {type: Schema.Types.ObjectId, ref: 'Business', required: [true, 'Required']},
  user_father: {type: Schema.Types.ObjectId, ref: 'User', required: [true, 'Required']},
  position: {type: String, required: [true, 'Required']},
  mobile: String,
  phone: String,
  adress: String,
  admission_date: Date,
  departure_date: Date,
  password: {type: String, select: false},
  email: {type: String, required: [true, 'Required'], unique: true, lowercase: true},
  role: {type: Schema.Types.ObjectId, ref: 'Role', required: [true, 'Required']},
  image: {type: String},
  sign_up_Date: {type: Date, default: Date.now()},
  last_login: Date,
  state: {type: String, default: 'E'}
})
UserShema.pre('save', function (next) {
  let user = this
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next()
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})
UserShema.methods.gravatar = function () {
  if (!this.email) return 'https://gravatar.com/avatar/?s=2006d=retro'
  const md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}
UserShema.plugin(timestamps)
const User = models.model('User', UserShema)
User.schema.path('name').validate(val.validatorUndefined,
  'Required', 'required')
User.schema.path('last_name').validate(val.validatorUndefined,
    'Required', 'required')
User.schema.path('business').validate(val.validatorUndefined,
    'Required', 'required')
User.schema.path('user_father').validate(val.validatorUndefined,
    'Required', 'required')
User.schema.path('position').validate(val.validatorUndefined,
    'Required', 'required')
User.schema.path('email').validate(val.validatorUndefined,
    'Required', 'required')
User.schema.path('role').validate(val.validatorUndefined,
    'Required', 'required')
User.schema.path('password').validate(val.validatorUndefined,
    'Required', 'required')
module.exports = User
