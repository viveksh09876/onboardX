import type { FieldConfig } from "./types";

export const isFieldVisible = (
  field: FieldConfig,
  formData: Record<string, any>
): boolean => {
  if (!field.conditions) return true;

  return field.conditions.every((cond) => {
    const value = formData[cond.fieldId];
    if (cond.equals !== undefined) return value === cond.equals;
    if (cond.notEquals !== undefined) return value !== cond.notEquals;
    return true;
  });
};
