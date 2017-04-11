import axios from 'axios'
import queryString from 'query-string'

const Request = {
  get (url, params) {
    if (params) {
      url += '?' + queryString.stringify(params)
      return axios.get(url)
    }
  },
  post (url, params) {
    return axios.post(url, params, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}

export default Request
