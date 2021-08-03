module.exports = {
  description: 'Orders service description',
  definition: {
    type: 'object',
    required: [
      'status',
      'user_id'
    ],
    properties: {
      status: {
        type: 'string',
        description: 'status of order'
      },
      user_id: {
        type: 'integer',
        description: 'id of user data'
      }
    }
  }
};
