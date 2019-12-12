"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const UserSchema = new (0, _mongoose.Schema)(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    companyId: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose.model.call(void 0, 'User', UserSchema);
