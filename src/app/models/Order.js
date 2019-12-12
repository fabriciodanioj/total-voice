import { Schema, model } from 'mongoose';

const OrderSchema = new Schema(
  {
    truck: {
      type: Schema.Types.ObjectId,
      ref: 'Truck',
    },
    clients: {
      type: [Schema.Types.ObjectId],
      ref: 'Client',
    },
  },
  {
    timestamps: true,
  }
);

export default model('Order', OrderSchema);
