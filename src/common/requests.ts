import axios, { AxiosInstance } from 'axios'
const config = require('./config.json')

const instance: AxiosInstance = axios.create({
  baseURL: config.baseURL,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Access-Control-Allow-Origin': '*'
  }
})

// #if process.env.NODE_ENV === 'development'
import createMockInstance from './requests-mocked'
createMockInstance(instance)
// #endif

export function fetchItems (url: string) {
  return instance.get(url)
    .then(response => response.data)
    .catch(err => console.log('error', err))
}

export function fetchMetadata (url: string) {
  return instance.get('/metadata', {
    responseType: 'json'
  })
    .then(response => response.data)
    .catch(err => console.log('error', err))
}
