import axios from 'axios'

const baseUrl = 'http://localhost:4040/api'

export const get = async () => {
  return axios.get(`${baseUrl}/financial-records`)
}