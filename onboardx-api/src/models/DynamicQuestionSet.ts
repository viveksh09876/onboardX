import { Schema, model, Document } from "mongoose";

export interface IDynamicQuestion {
  questionId: string;
  type: string;
  label?: string;
  labelKey?: string;
  options?: { code: string; label: string }[];
  conditions?: any;
  validation?: any;
  answer?: any;
}

export interface IDynamicQuestionSet extends Document {
  screen: string; // e.g. "personal", "business"
  rules: any;     // rule definitions for dynamic logic
  questions: IDynamicQuestion[];
}

const dynamicQuestionSchema = new Schema<IDynamicQuestion>({
  questionId: { type: String, required: true },
  type: { type: String, required: true },
  label: String,
  labelKey: String,
  options: [{ code: String, label: String }],
  conditions: Schema.Types.Mixed,
  validation: Schema.Types.Mixed,
  answer: Schema.Types.Mixed
});

const dynamicQuestionSetSchema = new Schema<IDynamicQuestionSet>({
  screen: { type: String, required: true, unique: true },
  rules: Schema.Types.Mixed,
  questions: [dynamicQuestionSchema]
});

export default model<IDynamicQuestionSet>("DynamicQuestionSet", dynamicQuestionSetSchema);
