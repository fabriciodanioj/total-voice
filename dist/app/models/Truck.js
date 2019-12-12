"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const TruckSchema = new (0, _mongoose.Schema)(
  {
    licensePlate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose.model.call(void 0, 'Truck', TruckSchema);
