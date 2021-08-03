module.exports = {
  description: 'Producst service description',
  definition: {
    type: 'object',
    required: [
      'name',
      'status',
      'price',
      'merchant_id'
    ],
    properties: {
      name: {
        type: 'string',
        description: 'The product name'
      },
      status: {
        type: 'string',
        description: 'status of product'
      },
      price: {
        type: 'number',
        description: 'price of product'
      },
      merchant_id: {
        type: 'number',
        description: 'id of merchant data'
      }
    }
  }
};
