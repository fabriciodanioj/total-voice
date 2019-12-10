import { Schema, model } from 'mongoose';

const ClientSchema = new Schema(
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
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    clientAddress: {
      type: Schema.Types.ObjectId,
      ref: 'Address',
      required: true,
      unique: true,
    },
    dealer: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Client', ClientSchema);
