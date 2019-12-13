import Order from '../../models/Order';

class ShowOrderController {
  async show(req, res) {
    const { orderId } = req.params;

    await Order.findById({ _id: orderId }, (err, order) => {
      if (err) {
        res.send('Something went really wrong!!!');
      }
      return res.status(200).send(order);
    });
  }
}

export default new ShowOrderController();
