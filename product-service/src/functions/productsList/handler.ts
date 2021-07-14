import { formatJSONResponse } from '@libs/apiGateway';

export const main = async () => {
  return formatJSONResponse({
    products: [{
      productName: 'LG 27UL500 27',
      price: 23700
    }]
  });
};
