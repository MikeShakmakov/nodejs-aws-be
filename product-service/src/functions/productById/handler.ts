import { formatJSONError } from './../../libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { APIGatewayProxyEvent } from 'aws-lambda';
import * as json from '../productsList/adidas.json';

export const main = async (event: APIGatewayProxyEvent) => {
  try {
    const item = json.data.find(i => i.Product_ID === event.pathParameters?.id);
    if (item) {
      return await Promise.resolve(formatJSONResponse(item));
    } else {
      throw {statusCode: 404, text: 'Product was not found'};
    }
  } catch(e) {
    if (e?.statusCode) {
      return formatJSONError(e.statusCode, e.text);
    }
    return formatJSONError(500, 'something went wrong');
  }
};
