import { keysToCamel, keysToSnake } from '../object';
import fetchTool from './fetchTool';

class Endpoint {
  constructor({ apiRoot = '' }) {
    this.fetch = fetchTool();
    this.root = `${apiRoot}`;
    this.serializer = keysToSnake;
    this.deserializer = keysToCamel;
  }
}
export default Endpoint;
