import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'

const client = axios.create({
  baseURL: 'https://7gcotuwenk.execute-api.us-west-2.amazonaws.com/test',
  withCredentials: true
})

client.interceptors.response.use(
  res => {
    res.data = camelcaseKeys(res.data, { deep: true })
    return res
  }
)

export default client
