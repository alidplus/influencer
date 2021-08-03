const cron = require('node-cron');
const Sequelize = require('sequelize');
const { Client } = require("@notionhq/client")

async function notionPageCron () {
  const Orders = this.service('orders')
  const Products = this.service('products')
  // const orderItems = await OrderItems.find({ paginate: false })
  try {
    const orderItems = await Products.Model.findAll({
      subQuery: false,
      attributes:[
        'id', 'name'
      ],
      include:[
        {
          model: Orders.Model,
          attributes:['id']
        }
      ]
    })
    const orderItemsMaped = orderItems.map(orderItem => {
      return {
        Product_id: orderItem.id,
        Product_Name: orderItem.name,
        Orders_num: orderItem.orders.length
      }
    })

    // const notionConfig = this.get('notion')
    // const notion = new Client({
    //   auth: notionConfig.NOTION_TOKEN,
    // })
    //
    // const response = await notion.pages.create({...})

    return { ok: true, error: null, data: orderItemsMaped }
  } catch (e) {
    console.log(e)
    return { ok: false, err: e.message }
  }
}

module.exports = function (app, schedule) {
  const isValidSchedule = cron.validate(schedule);
  if (!isValidSchedule) throw new Error(`"${schedule}" is not a valid cron schedule`);

  // using with node-cron (not recommended)
  cron.schedule(schedule, notionPageCron.bind(app), {
    scheduled: true,
    timezone: "UTC"
  });

  // OR
  // for running it manually or with cron tab
  app.get('/crons/notionPageCron', async (req, res) => {
    let cronLogs = await notionPageCron.call(app)
    return res.json(cronLogs)
  })
};
