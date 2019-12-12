import Order from '../../models/Order';

class CreateOrderController {
  async store(req, res) {
    const { truck, clients } = req.body;

    await Order.create({
      truck,
      clients,
    })
      .then(data => {
        return res.send(data);
      })
      .catch(error => {
        return res.send({ erro: error });
      });
  }
}

export default new CreateOrderController();
