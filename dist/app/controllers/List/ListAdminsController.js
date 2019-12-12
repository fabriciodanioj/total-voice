"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Admin = require('../../models/Admin'); var _Admin2 = _interopRequireDefault(_Admin);

class ListAdminsController {
  async show(req, res) {
    await _Admin2.default.find({}, (err, users) => {
      if (err) {
        res.send('Something went really wrong!!!');
      }
      return res.json(users).status(200);
    });
  }
}

exports. default = new ListAdminsController();
