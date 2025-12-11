import { Schema, model, Document, Types } from "mongoose";

export interface IApplicationVersion extends Document {
  applicationId: string;           // business id for the form/application
  version: number;                 // version number (1,2,...)
  formData: any;                   // snapshot of the full form JSON (personal, business, teams, products)
  createdBy?: string | Types.ObjectId; // user id who created this version
  createdAt?: Date;
  status?: "DRAFT" | "SUBMITTED" | "ANALYST_REVIEW" | "ANALYST_REJECTED" | "QC_APPROVED" | "QC_REJECTED";
  analystComments?: string;
  qcComments?: string;
  metadata?: any;                  // backend-added tags / audit data
}

const applicationVersionSchema = new Schema<IApplicationVersion>(
  {
    applicationId: { type: String, required: true, index: true },
    version: { type: Number, required: true },
    formData: { type: Schema.Types.Mixed, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    status: { type: String, default: "DRAFT" },
    analystComments: Schema.Types.Mixed,
    qcComments: Schema.Types.Mixed,
    metadata: Schema.Types.Mixed
  },
  {
    timestamps: { createdAt: true, updatedAt: "updatedAt" }
  }
);

// Ensure unique per applicationId + version
applicationVersionSchema.index({ applicationId: 1, version: 1 }, { unique: true });

export default model<IApplicationVersion>("ApplicationVersion", applicationVersionSchema);
