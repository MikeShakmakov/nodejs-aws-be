import { APIGatewayProxyEvent } from 'aws-lambda';
import { ErrorType, formatJSONResponse, ResponseType } from '@libs/apiGateway';
import * as json from './adidas.json';

export const main = async (_: APIGatewayProxyEvent) => {
  try {
    return formatJSONResponse<ResponseType>(200, {
      products: json.data
    });
  } catch (e) {
    return formatJSONResponse<ErrorType>(500, {error: 'something went wrong'});
  }
};
