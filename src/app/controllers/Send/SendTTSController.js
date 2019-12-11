/* eslint-disable no-console */
import TotalVoice from 'totalvoice-node';

const api = new TotalVoice(process.env.AccessToken);

class SendTTSController {
  async create(req, res) {
    const { receiver, msg } = req.body;
    await api.composto
      .enviar(
        receiver,
        [
          {
            acao: 'tts',
            acao_dados: {
              mensagem: msg,
              velocidade: '-2',
              tipo_voz: 'br-Ricardo',
            },
          },
        ],
        null,
        'auto_range',
        false
      )
      .then(data => {
        return res.send(data);
      })
      .catch(error => {
        return res.send({ Erro: error });
      });
  }
}

export default new SendTTSController();
