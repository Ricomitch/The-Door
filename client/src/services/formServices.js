import api from './apiConfig'

export const getVolunteers = async () => {
  try {
    const response = await api.get('/volunteers')
    // console.log(response)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getVolunteer = async (id) => {
  try {
    const response = await api.get(`/volunteers/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createVolunteer = async (volunteer) => {
  try {
    const response = await api.post('/volunteers', volunteer)
    
    return response
  } catch (error) {
    console.log('I am in createVolunteer service')
    console.log(error.response)
    return error.response
  }
}

export const updateVolunteer = async (id, volunteer) => {
  try {
    const response = await api.put(`/volunteers/${id}`, volunteer)
    return response
  } catch (error) {
    return error.response
  }
}

export const deleteVolunteer = async (id) => {
  try {
    const response = await api.delete(`/volunteers/${id}`)
    return response.data
  } catch (error) {
    throw error;
  }
}