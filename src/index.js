/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');

if (process.env.NODE_ENV === 'seed') {
  const seeder = require('feathers-seeder');
  const seederConfig = require('../seeder/config');
  try {
    app.configure(seeder(seederConfig(app)));
    app.setup();
    app.seed();
  } catch (e) {
    console.log('seed err', e);
  }
  // .then(() => {
  //   console.log('seeding has done!');
  //   process.exit(0)
  // });

} else {

  const server = app.listen(port);
  process.on('unhandledRejection', (reason, p) => {
    logger.error('Unhandled Rejection at: Promise ', p, reason);
    console.log(reason);
  });

  server.on('listening', () =>
    logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
  );

}
