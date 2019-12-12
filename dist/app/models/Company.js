"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const CompanySchema = new (0, _mongoose.Schema)(
  {
    companyName: {
      type: String,
      required: true,
    },
    companyDocument: {
      type: String,
      required: true,
      unique: true,
    },
    companyToken: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose.model.call(void 0, 'Company', CompanySchema);
