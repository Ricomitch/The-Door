const Volunteer = require('../models/Volunteer')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const errorHandler500 = (error, res) => {
  res.status(500).json({ error: error.message })
}

const getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find()
    res.json(volunteers)
  } catch (error) {
    errorHandler500(error, res)
  }
}

const getVolunteer = async (req, res) => {
  try {
    const { id } = req.params
    const volunteer = await Volunteer.findById(id)
    if (volunteer) {
      return res.json(volunteer)
    }
    res.status(404).send('Volunteer not found!' )
  } catch (error) {
    errorHandler500(error, res)
  }
}

const createVolunteer = async (req, res) => {
  try {
    const volunteer = await new Volunteer(req.body)
    await volunteer.save()
    res.status(201).json(volunteer)
  } catch (error) {
    errorHandler500(error, res)
  }
}

const updateVolunteer = async (req, res) => {
  const { id } = req.params
  await Volunteer.findByIdAndUpdate(id, req.body, { new: true }, (error, volunteer) => {
    if (error) {
      return errorHandler500(error)
    }
    if (!volunteer) {
      return res.status(404).send('Volunteer not found!')
    }
    res.status(200).json(volunteer)
  })
}

const deleteVolunteer = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Volunteer.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Volunteer deleted!")
    }
    throw new Error("Volunteer not found!")
  } catch (error) {
    errorHandler500(error, res)
  }
}

module.exports = {
  getVolunteers,
  getVolunteer,
  createVolunteer,
  updateVolunteer,
  deleteVolunteer
}