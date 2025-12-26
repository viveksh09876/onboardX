import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Domain = "personal" | "business" | "teams" | "products";

export interface FormState {
  formData: Record<Domain, Record<string, any>>;
  additionalQuestions: any[];
}

const initialState: FormState = {
  formData: {
    personal: {},
    business: {},
    teams: {},
    products: {},
  },
  additionalQuestions: [],
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
  },
});

export const { updateDomainData, setAdditionalQuestions, resetForm } =
  formSlice.actions;

export default formSlice.reducer;
