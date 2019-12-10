import { Schema, model } from 'mongoose';

const TruckSchema = new Schema(
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

export default model('Truck', TruckSchema);
