import TotalVoice from 'totalvoice-node';

const api = new TotalVoice(process.env.AccessToken);

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

export default new SendConfirmationSMSController();
