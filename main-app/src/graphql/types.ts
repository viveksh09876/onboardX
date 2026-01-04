import type { FieldConfig } from "../form-engine/types";

export interface DynamicQuestion extends FieldConfig {
  questionId: string;
  answer?: any;
}

export interface GetDynamicQuestionsResponse {
  getDynamicQuestions: DynamicQuestion[];
}

export interface GetDynamicQuestionsVars {
  screen: string;
  previousData: any;
}

export interface SaveDraftInput {
  domain: string;
  data: any;
  applicationId?: string;
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
