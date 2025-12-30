import type { FieldConfig } from "../form-engine/types";

export interface DynamicQuestion extends FieldConfig {
  questionId: string;
  answer?: any;
}

export interface GetDynamicQuestionsResponse {
  getDynamicQuestions: DynamicQuestion[];
}

export interface GetDynamicQuestionsVars {
  domain: string;
  input: any;
}
