const db = require('../db/connection')
const Volunteer = require('../models/Volunteer')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const checkPreExistingUser = async () => {
  const volunteer = new Volunteer({
    firstName: 'q',
    lastName: 'w',
    phone: '142',
    email: 'e',
    roles: [],
    programs: []
  })
  try {
    const check = await Volunteer.exists({ email: volunteer.email })
    console.log(check)
  } catch (error) {
    console.log(error)
  }
}

const run = async () => {
  await checkPreExistingUser()
  db.close()
}

run()

// module.exports = {
//   checkPreExistingUser
// }
