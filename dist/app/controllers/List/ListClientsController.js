"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Client = require('../../models/Client'); var _Client2 = _interopRequireDefault(_Client);

class ListClientsController {
  async show(req, res) {
    const { dealer } = req.body;

    await _Client2.default.find({ dealer }, (err, client) => {
      if (err) {
        res.send('Something went really wrong!!!');
      }
      return res.json(client).status(200);
    });
  }
}

exports. default = new ListClientsController();
