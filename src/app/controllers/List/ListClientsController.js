import Client from '../../models/Client';

class ListClientsController {
  async show(req, res) {
    const { dealer } = req.params;

    await Client.find({ dealer }, (err, client) => {
      if (err) {
        res.send('Something went really wrong!!!');
      }
      return res.json(client).status(200);
    });
  }
}

export default new ListClientsController();
