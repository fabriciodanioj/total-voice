"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const OrderSchema = new (0, _mongoose.Schema)(
  {
    truck: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'Truck',
    },
    clients: {
      type: [_mongoose.Schema.Types.ObjectId],
      ref: 'Client',
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose.model.call(void 0, 'Order', OrderSchema);
