import { Schema, model, Document } from "mongoose";

export interface IReferenceData extends Document {
  type: string;     // "COUNTRY", "BUSINESS_TYPE"
  code: string;     // "IN", "US"
  name: string;     // "India"
}

const referenceDataSchema = new Schema<IReferenceData>(
  {
    type: { type: String, required: true, index: true },
    code: { type: String, required: true },
    name: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

export default model<IReferenceData>("ReferenceData", referenceDataSchema);
