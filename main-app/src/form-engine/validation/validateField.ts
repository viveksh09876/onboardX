import type { FieldConfig } from "../types";

export const validateField = (
  field: FieldConfig,
  value: any,
  visible: boolean
): string | null => {
  if (!visible) return null;

  if (field.required) {
    if (value === undefined || value === null || value === "") {
      return "This field is required";
    }
  }

  return null;
};
