import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Domain = "personal" | "business" | "teams" | "products";

export interface FormState {
  formData: Record<Domain, Record<string, any>>;
  additionalQuestions: {
    [domain: string]: any[];
  };
  errors: Record<Domain, Record<string, any>>;
  applicationId?: string;
  currentVersion?: number;
}

const initialState: FormState = {
  formData: {
    personal: {},
    business: {},
    teams: {},
    products: {},
  },
  additionalQuestions: {},
  errors: {
    personal: {},
    business: {},
    teams: {},
    products: {},
  },
  applicationId: "",
  currentVersion: 1,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateDomainData(
      state,
      action: PayloadAction<{
        domain: Domain;
        data: Record<string, any>;
      }>
    ) {
      state.formData[action.payload.domain] = {
        ...state.formData[action.payload.domain],
        ...action.payload.data,
      };
    },

    setDynamicQuestions(
      state,
      action: PayloadAction<{
        domain: string;
        questions: any[];
      }>
    ) {
      state.additionalQuestions[action.payload.domain] =
        action.payload.questions;
    },

    updateDynamicAnswer(
      state,
      action: PayloadAction<{
        domain: string;
        questionId: string;
        value: any;
      }>
    ) {
      const list = state.additionalQuestions[action.payload.domain] || [];

      const q = list.find((x) => x.questionId === action.payload.questionId);
      if (q) {
        q.answer = action.payload.value;
      }
    },

    resetForm() {
      return initialState;
    },

    setErrors(
      state,
      action: PayloadAction<{
        domain: Domain;
        errors: Record<string, string>;
      }>
    ) {
      state.errors[action.payload.domain] = action.payload.errors;
    },

    clearErrors(state, action: PayloadAction<{ domain: Domain }>) {
      state.errors[action.payload.domain] = {};
    },

    setApplicationMeta(
      state,
      action: PayloadAction<{
        applicationId: string;
        version: number;
      }>
    ) {
      state.applicationId = action.payload.applicationId;
      state.currentVersion = action.payload.version;
    },
  },
});

export const {
  updateDomainData,
  setDynamicQuestions,
  updateDynamicAnswer,
  resetForm,
  setErrors,
  clearErrors,
  setApplicationMeta,
} = formSlice.actions;

export default formSlice.reducer;
