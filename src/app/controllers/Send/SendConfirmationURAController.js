import TotalVoice from 'totalvoice-node';

const api = new TotalVoice(process.env.AccessToken);

class SendConfirmationURAController {
  async create(req, res) {
    const { receiver, clientName } = req.body;

    const msg = `Olá ${clientName}, nosso time de distribuição já saiu para realizar sua entrega.
    Tecle 1 para confirmar o recebimento do pedido ou tecle dois para rejeitar
    `;

    await api.composto
      .enviar(
        receiver,
        [
          {
            acao: 'tts',
            acao_dados: {
              mensagem: msg,
              velocidade: '-2',
              tipo_voz: 'br-Vitoria',
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

export default new SendConfirmationURAController();
