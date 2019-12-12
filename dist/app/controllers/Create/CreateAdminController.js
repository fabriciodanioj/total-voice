"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _Admin = require('../../models/Admin'); var _Admin2 = _interopRequireDefault(_Admin);
var _Company = require('../../models/Company'); var _Company2 = _interopRequireDefault(_Company);

class CreateAdminController {
  async store(req, res) {
    try {
      const { name, email, password, companyId, token } = await req.body;

      const checkEmail = await _Admin2.default.findOne({ email });

      if (email.length < 5) {
        res.send({ error: 'Please, insert a e-mail.' });
      }

      if (!checkEmail) {
        if (password.length >= 8) {
          const salt = _bcrypt2.default.genSaltSync(10);

          const passwordToSave = _bcrypt2.default.hashSync(password, salt);

          const { companyToken } = await _Company2.default.findById(companyId);

          if (companyToken === token) {
            const user = await _Admin2.default.create({
              name,
              email,
              password: passwordToSave,
              companyId,
            });

            return res.json(user);
          }
          return res.send({ error: 'Company token is invalid' });
        }
        return res.send({ error: 'Password must be 8 or more digits' });
      }

      return res.send({ error: 'E-mail already exists' });
    } catch (error) {
      return res.status(400).send({ error: 'Registration failed' });
    }
  }
}

exports. default = new CreateAdminController();
