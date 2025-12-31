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

export interface SaveDraftInput {
  applicationId?: string;
  formData: any;
}

export interface SaveDraftResponse {
  saveDraft: {
    applicationId: string;
    version: number;
    status: string;
  };
}

export interface SubmitResponse {
  submitApplication: {
    applicationId: string;
    version: number;
    status: string;
  };
}
