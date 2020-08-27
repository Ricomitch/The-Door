
const Volunteer = require('../models/Volunteer')

const checkPreExistingEmail = async (val) => {

  try {
    const check = await Volunteer.exists({ email: val })
    return !check
  } catch (error) {
    console.log(error)
  }
}

module.exports = checkPreExistingEmail
