import type { FormConfig } from "../../form-engine/types";

export const businessFormConfig: FormConfig = {
  fields: [
    {
      id: "businessType",
      type: "select",
      labelKey: "business.businessType",
      required: true,
      options: [
        { labelKey: "business.types.proprietorship", value: "PROPRIETORSHIP" },
        { labelKey: "business.types.partnership", value: "PARTNERSHIP" },
        { labelKey: "business.types.privateLtd", value: "PRIVATE_LTD" },
      ],
    },

    {
      id: "country",
      type: "select",
      labelKey: "business.country",
      required: true,
      options: [
        { labelKey: "countries.india", value: "IN" },
        { labelKey: "countries.us", value: "US" },
      ],
    },

    {
      id: "gstNumber",
      type: "text",
      labelKey: "business.gstNumber",
      required: true,
      conditions: [
        {
          fieldId: "country",
          equals: "IN",
        },
        {
          fieldId: "businessType",
          notEquals: "PROPRIETORSHIP",
        },
      ],
    },

    {
      id: "registrationNumber",
      type: "text",
      labelKey: "business.registrationNumber",
      required: true,
      conditions: [
        {
          fieldId: "businessType",
          equals: "PRIVATE_LTD",
        },
      ],
    },
  ],
};
