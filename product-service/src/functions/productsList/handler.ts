import { formatJSONResponse } from '@libs/apiGateway';
const json = require('./adidas.json');

export const main = async () => {
  return formatJSONResponse({
    products: json
  });
};
