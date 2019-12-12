import { Schema, model } from 'mongoose';

const ClientSchema = new Schema(
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
      type: Schema.Types.ObjectId,
      ref: 'Address',
      required: true,
    },
    dealer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Client', ClientSchema);
