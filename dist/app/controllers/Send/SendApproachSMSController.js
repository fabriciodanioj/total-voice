"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _totalvoicenode = require('totalvoice-node'); var _totalvoicenode2 = _interopRequireDefault(_totalvoicenode);

const api = new (0, _totalvoicenode2.default)(process.env.AccessToken);

class SendApproachSMSController {
  async create(req, res) {
    const { receiver, clientName, companyName } = req.body;

    const msg = `Olá ${clientName}, estamos a aproximadamente dez minutos do seu estabelecimento. Se prepare para a chegado do veículo de entrega da empresa ${companyName}`;

    await api.sms
      .enviar(receiver, msg)
      .then(data => {
        return res.send(data);
      })
      .catch(error => {
        return res.send({ Erro: error });
      });
  }
}

exports. default = new SendApproachSMSController();
