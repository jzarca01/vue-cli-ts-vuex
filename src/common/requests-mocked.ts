import MockAdapter from 'axios-mock-adapter'
import jsf from 'json-schema-faker'
jsf.extend('faker', function () {
  return require('faker')
})

const metadata = require('../mocks/metadata.json')
import { AxiosInstance } from 'axios';

/*
async function resolveSchema (schema) {
  const mockItems = await jsf.resolve(schema)
  return mockItems
}
*/

export default function createMockInstance (instance: AxiosInstance) {
  const mock = new MockAdapter(instance)
  console.log('mocked')
  mock
    .onGet('/metadata').reply(200, metadata)
    .onGet().passThrough()
}
