"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Client = require('../../models/Client'); var _Client2 = _interopRequireDefault(_Client);
var _Address = require('../../models/Address'); var _Address2 = _interopRequireDefault(_Address);

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

    const address = await _Address2.default.create({
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

    await _Client2.default.create({
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

exports. default = new CreateClientController();
