import TotalVoice from 'totalvoice-node';

const api = new TotalVoice(process.env.AccessToken);

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

export default new SendApproachSMSController();
