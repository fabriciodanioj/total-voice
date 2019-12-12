"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const ClientSchema = new (0, _mongoose.Schema)(
  {
    companyName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    clientAddress: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'Address',
      required: true,
    },
    dealer: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose.model.call(void 0, 'Client', ClientSchema);
