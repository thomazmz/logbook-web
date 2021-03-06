import axios from 'axios'

const baseUrl = 'http://localhost:4040/api'

export const create = async expense => {
  const response = axios.post(`${baseUrl}/financial-records`, expense);
  return response.data
}