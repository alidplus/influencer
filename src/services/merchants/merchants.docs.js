module.exports = {
  description: 'Merchants service description',
  definition: {
    type: 'object',
    required: [
      'name'
    ],
    properties: {
      name: {
        type: 'string',
        description: 'The merchants name'
      },
      address: {
        type: 'string',
        description: 'optional address'
      }
    }
  }
};
