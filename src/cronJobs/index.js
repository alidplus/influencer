const notionPageCron = require('./notionPage.cron')

module.exports = function (app) {
  notionPageCron(app, '0 7 * * MON')
}
