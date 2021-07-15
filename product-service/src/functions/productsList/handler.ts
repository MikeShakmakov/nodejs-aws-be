import { formatJSONResponse } from '@libs/apiGateway';
import * as json from './adidas.json';

export const main = async () => {
  return await Promise.resolve(formatJSONResponse({
    products: json.data
  }));
};
