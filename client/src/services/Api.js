import axios from 'axios'

export default () => {
  // axios object pointing at backend url
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
