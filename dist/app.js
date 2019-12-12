"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});require('dotenv/config');

var _youch = require('youch'); var Youch = _interopRequireWildcard(_youch);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
require('express-async-errors');
var _mongoose = require('mongoose');
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
  constructor() {
    this.server = _express2.default.call(void 0, );

    this.database();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(_express2.default.json());
    this.server.use(_cors2.default.call(void 0, ));
  }

  database() {
    _mongoose.connect.call(void 0, 
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
  }

  routes() {
    this.server.use(_routes2.default);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

exports. default = new App().server;
