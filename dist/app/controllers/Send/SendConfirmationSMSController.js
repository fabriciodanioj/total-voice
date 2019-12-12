"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _totalvoicenode = require('totalvoice-node'); var _totalvoicenode2 = _interopRequireDefault(_totalvoicenode);

const api = new (0, _totalvoicenode2.default)(process.env.AccessToken);

class SendConfirmationSMSController {
  async create(req, res) {
    const { receiver, clientName } = req.body;

    const msg = `${clientName}, nosso time de distribuição já saiu para realizar sua entrega.
    Responda:
    1 - Receberei o pedido
    2 - Não poderei receber o pedido
    `;

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

exports. default = new SendConfirmationSMSController();
