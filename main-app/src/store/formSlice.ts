import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Domain = "personal" | "business" | "teams" | "products";

export interface FormState {
  formData: Record<Domain, Record<string, any>>;
  additionalQuestions: any[];
  errors: Record<Domain, Record<string, any>>;
}

const initialState: FormState = {
  formData: {
    personal: {},
    business: {},
    teams: {},
    products: {},
  },
  additionalQuestions: [],
  errors: {
    personal: {},
    business: {},
    teams: {},
    products: {},
  },
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

    setAdditionalQuestions(state, action: PayloadAction<any[]>) {
      state.additionalQuestions = action.payload;
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
  },
});

export const {
  updateDomainData,
  setAdditionalQuestions,
  resetForm,
  setErrors,
  clearErrors,
} = formSlice.actions;

export default formSlice.reducer;
