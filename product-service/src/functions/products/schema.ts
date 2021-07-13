export default {
  type: "object",
  properties: {
    productName: { type: 'string' },
    price: { type: 'number' }
  },
  required: ['productName', 'price']
} as const;
