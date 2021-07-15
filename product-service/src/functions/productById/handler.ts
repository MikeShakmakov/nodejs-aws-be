import { formatJSONResponse } from '@libs/apiGateway';
const json = require('../productsList/adidas.json');

export const main = async (event) => {
  return formatJSONResponse({
    products: json
  });
};
