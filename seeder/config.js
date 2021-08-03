const nopFn = () => {}
module.exports = app => {
  const products = []
  return {
    services: [
      {
        delete: true,
        disabled: false,
        count: 1,
        path: 'merchants',
        template: {
          name: '{{company.companyName}}',
        },

        async callback(merchant, seed) {
          console.info(`Say hello to ${merchant.name}!`);
          return seed({
            delete: true,
            path: 'products',
            count: 5,
            template: {
              name: '{{commerce.productName}}',
              price: '{{commerce.price}}',
              status: 'active',
              merchant_id: merchant.id
            },
            async callback(product, seed) {
              products.push(product)
              console.info(`new product seeded: ${product.name} on ${product.merchant_id}!`);
            }
          });
        }
      },
      {
        delete: true,
        disabled: false,
        count: 10,
        path: 'users',
        template: {
          full_name: '{{name.firstName}} {{name.lastName}}',
          country_code: 1
        },
        async callback(user, seed) {
          console.info(`Happy birthday to ${user.full_name}!`);
          return seed({
            delete: true,
            path: 'orders',
            count: 1,
            template: {
              status: 'pending',
              user_id: user.id
            },
            async callback(order, seed) {
              console.info(`${user.name} has new "${order.status}" order: ${order.id}`);
              const allProductsCount = products.length
              if (allProductsCount === 0) return
              const randomIndex = ~~(Math.random() * 999) % allProductsCount
              const product = products[randomIndex]
              return seed({
                delete: true,
                path: 'order-items',
                count: 1,
                template: {
                  quantity: ~~(Math.random() * 5) + 1,
                  order_id: order.id,
                  product_id: product.id
                },
                async callback(item, seed) {
                  console.info(`${user.full_name}'s order has ${item.quantity} of ${product.name}`);
                }
              });
            }
          });
        }
      },
    ]
  }
}
