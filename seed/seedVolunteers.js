const db = require('../db/connection')
const Volunteer = require('../models/Volunteer')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  const volunteer = new Volunteer(
    {
      firstName: "a",
       lastName: "b",
       phone: "c",
       email: "d",
       programs: {obj : 'key'},
       roles: { obj : 'key' }
    }
  )
  await volunteer.save()
}

const run = async () => {
  await main()
  db.close()
}

run()