"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Company = require('../../models/Company'); var _Company2 = _interopRequireDefault(_Company);

class ListCompaniesController {
  async show(req, res) {
    await _Company2.default.find({}, (err, users) => {
      if (err) {
        res.send('Something went really wrong!!!');
      }
      return res.json(users).status(200);
    });
  }
}

exports. default = new ListCompaniesController();
