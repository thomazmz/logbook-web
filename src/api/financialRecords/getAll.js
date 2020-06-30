import axios from 'axios'

const baseUrl = 'http://localhost:4040/api'

export const getAll = async () => {
  const response = await axios.get(`${baseUrl}/financial-records`)
  return response.data
}