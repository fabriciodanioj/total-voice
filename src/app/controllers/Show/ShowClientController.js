import Client from '../../models/Client';
import Address from '../../models/Address';

class ShowClientController {
  async show(req, res) {
    const { clientId } = req.body;

    const client = await Client.findById({ _id: clientId });

    await Address.findById({ _id: client.clientAddress }, (err, address) => {
      if (err) {
        res.send('Something went really wrong!!!');
      }
      return res.status(200).send({ Client: client, Address: address });
    });
  }
}

export default new ShowClientController();
