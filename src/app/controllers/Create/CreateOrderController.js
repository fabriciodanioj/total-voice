/* import md5 from 'md5';
import Order from '../../models/Order';

class CreateOrderController {
  async store(req, res) {
    const { OrderName, OrderDocument } = req.body;

    const Order = await Order.findOne({ OrderDocument });

    if (!Order) {
      const OrderToken = md5(OrderDocument);

      await Order.create({
        OrderName,
        OrderDocument,
        OrderToken,
      })
        .then(data => {
          return res.send(data);
        })
        .catch(error => {
          return res.send({ erro: error });
        });
    }

    return res.send({ erro: 'Order already exists' });
  }
}

export default new CreateOrderController();
*/
