"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _authjson = require('../../../Config/auth.json');

var _Admin = require('../../models/Admin'); var _Admin2 = _interopRequireDefault(_Admin);

class AdminSessionController {
  async index(req, res) {
    const { email, password } = await req.body;

    const admin = await _Admin2.default.findOne({ email }).select('+password');

    if (!admin) {
      return res.status(401).send({ error: 'Admin not found' });
    }

    const match = await _bcrypt2.default.compare(password, admin.password);

    if (!match) {
      return res.status(401).send({ error: 'Password is wrong' });
    }

    admin.password = undefined;

    const token = _jsonwebtoken2.default.sign({ id: admin.id }, _authjson.secret, {
      expiresIn: 86400,
    });

    return res.status(202).json({ admin, token });
  }
}

exports. default = new AdminSessionController();
