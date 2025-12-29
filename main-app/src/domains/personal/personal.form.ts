import type { FormConfig } from "../../form-engine/types";

export const personalFormConfig: FormConfig = {
  fields: [
    {
      id: "country",
      type: "select",
      labelKey: "personal.country",
      options: [
        { labelKey: "countries.india", value: "IN" },
        { labelKey: "countries.us", value: "US" },
      ],
    },
    {
      id: "pan",
      type: "text",
      labelKey: "personal.pan",
      conditions: [{ fieldId: "country", equals: "IN" }],
    },
  ],
};
