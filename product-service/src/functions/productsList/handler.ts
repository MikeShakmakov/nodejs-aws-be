import { formatJSONError } from './../../libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import * as json from './adidas.json';

export const main = async () => {
  try {
    return await Promise.resolve(formatJSONResponse({
      products: json.data
    }));
  } catch (e) {
    return formatJSONError(500, 'something went wrong');
  }
};
