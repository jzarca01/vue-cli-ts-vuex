import MockAdapter from 'axios-mock-adapter';
import jsf from 'json-schema-faker';
jsf.extend('faker', () =>
  require('faker'),
);

const metadata = require('../mocks/metadata.json');
import { AxiosInstance } from 'axios';

async function resolveSchema(schema: any) {
  const mockItems: any[] = await jsf.resolve(schema);
  return mockItems;
}


export default function createMockInstance(instance: AxiosInstance) {
  const mock = new MockAdapter(instance);
  console.warn('mocked');
  mock
    .onGet('/metadata').reply(200, metadata)
    .onGet('/items').reply(200, resolveSchema(metadata));
}
