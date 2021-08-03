module.exports = {
  description: 'Order items service description',
  definition: {
    type: 'object',
    required: [
      'quantity',
      'order_id',
      'product_id'
    ],
    properties: {
      order_id: {
        type: 'integer',
        description: 'id of order data'
      },
      product_id: {
        type: 'integer',
        description: 'id of product data'
      },
      quantity: {
        type: 'integer',
        description: 'count of products on order item'
      }
    }
  }
};
