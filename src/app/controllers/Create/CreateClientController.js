import Client from '../../models/Client';
import Address from '../../models/Address';

class CreateClientController {
  async store(req, res) {
    const {
      companyName,
      phone,
      country,
      state,
      zipCode,
      city,
      street,
      latitude,
      number,
      referencePoint,
      longitude,
      dealer,
    } = req.body;

    const address = await Address.create({
      country,
      state,
      zipCode,
      city,
      street,
      number,
      referencePoint,
      longitude,
      latitude,
    });

    await Client.create({
      companyName,
      phone,
      dealer,
      clientAddress: address.id,
    })
      .then(data => {
        return res.send(data);
      })
      .catch(error => {
        return res.send({ erro: error });
      });
  }
}

export default new CreateClientController();
