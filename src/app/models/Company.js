import { Schema, model } from 'mongoose';

const CompanySchema = new Schema(
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
  },
  {
    timestamps: true,
  }
);

export default model('Company', CompanySchema);
