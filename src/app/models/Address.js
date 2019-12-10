import { Schema, model } from 'mongoose';

const AddressSchema = new Schema(
  {
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    referencePoint: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Adress', AddressSchema);
