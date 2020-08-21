const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Volunteer = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    programs: { type: Object, required: true },
    roles: { type: Object, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('volunteers', Volunteer)
