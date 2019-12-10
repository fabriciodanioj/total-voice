import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
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
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    truckId: {
      type: Schema.Types.ObjectId,
      ref: 'Truck',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('User', UserSchema);
