module.exports = {
  description: 'Users service description',
  definition: {
    type: 'object',
    required: [
      'full_name',
      'country_code'
    ],
    properties: {
      full_name: {
        type: 'string',
        description: 'The user name'
      },
      country_code: {
        type: 'integer',
        description: 'Country code of the user'
      }
    }
  }
};
