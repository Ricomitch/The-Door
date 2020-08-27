const db = require('../db/connection')
const Volunteer = require('../models/Volunteer')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  const volunteer = new Volunteer(
    {
      firstName: "abc",
       lastName: "b",
       phone: "(111)-111-1111",
       email: "d",
       programs: ['Health Service', 'Creative Arts'],
       roles: ['Volunteer', 'Mentor']
    }
  )
  await volunteer.save()
}

const run = async () => {
  await main()
  db.close()
}

run()