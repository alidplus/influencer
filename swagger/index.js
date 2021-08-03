const path = require('path')

module.exports = app => {

  return {
    docsPath: '/docs',
    uiIndex: path.join(__dirname, 'docs.html'),
    specs: {
      info: {
        title: 'Influencer Play Ground',
        description: 'A test api for Influencer Index',
        version: '1.0.0',
      },
      schemes: ['http', 'https'] // Optionally set the protocol schema used (sometimes required when host on https)
    }
  }
}
