import Truck from '../../models/Truck';

class CreateTruckController {
  async store(req, res) {
    const { licensePlate, owner } = req.body;

    await Truck.create({
      licensePlate,
      owner,
    })
      .then(data => {
        return res.send(data);
      })
      .catch(error => {
        return res.send({ erro: error });
      });
  }
}

export default new CreateTruckController();
