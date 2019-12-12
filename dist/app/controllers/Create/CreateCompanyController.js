"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _md5 = require('md5'); var _md52 = _interopRequireDefault(_md5);
var _Company = require('../../models/Company'); var _Company2 = _interopRequireDefault(_Company);

class CreateCompanyController {
  async store(req, res) {
    const { companyName, companyDocument } = req.body;

    const company = await _Company2.default.findOne({ companyDocument });

    if (!company) {
      const companyToken = _md52.default.call(void 0, companyDocument);

      await _Company2.default.create({
        companyName,
        companyDocument,
        companyToken,
      })
        .then(data => {
          return res.send(data);
        })
        .catch(error => {
          return res.send({ erro: error });
        });
    }

    return res.send({ erro: 'Company already exists' });
  }
}

exports. default = new CreateCompanyController();
