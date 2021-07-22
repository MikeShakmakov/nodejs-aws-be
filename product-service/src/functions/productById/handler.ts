import { ErrorType, formatJSONResponse, ResponseType } from '@libs/apiGateway';
import { APIGatewayProxyEvent } from 'aws-lambda';
import * as json from '../productsList/adidas.json';

export const main = async (event: APIGatewayProxyEvent) => {
  try {
    const item = json.data.find(i => i.Product_ID === event.pathParameters?.id);
    if (item) {
      return formatJSONResponse<ResponseType>(200, item);
    } else {
      throw {statusCode: 404, text: 'Product was not found'};
    }
  } catch(e) {
    if (e?.statusCode) {
      return formatJSONResponse<ErrorType>(e.statusCode, {error: e.text});
    }
    return formatJSONResponse<ErrorType>(500, {error: 'something went wrong'});
  }
};
