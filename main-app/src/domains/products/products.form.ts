import type { FormConfig } from "../../form-engine/types";

export const productsFormConfig: FormConfig = {
  fields: [
    {
      id: "productType",
      type: "select",
      labelKey: "products.productType",
      required: true,
      options: [
        { labelKey: "products.types.saas", value: "SAAS" },
        { labelKey: "products.types.marketplace", value: "MARKETPLACE" },
        { labelKey: "products.types.fintech", value: "FINTECH" },
      ],
    },
    {
      id: "monthlyRevenue",
      type: "number",
      labelKey: "products.monthlyRevenue",
      required: true,
    },
  ],
};
