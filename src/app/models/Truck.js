import { Schema, model } from 'mongoose';

const TruckSchema = new Schema(
  {
    licensePlate: {
      type: String,
      required: true,
      unique: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Truck', TruckSchema);
