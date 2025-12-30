import type { FormConfig } from "../types";
import type { ValidationErrorMap } from "./types";
import { isFieldVisible } from "../conditions";
import { validateField } from "./validateField";

export const validateStep = (
  config: FormConfig,
  domainData: Record<string, any>
): ValidationErrorMap => {
  const errors: ValidationErrorMap = {};

  config.fields.forEach((field) => {
    const visible = isFieldVisible(field, domainData);
    const error = validateField(field, domainData[field.id], visible);

    if (error) {
      errors[field.id] = error;
    }
  });

  return errors;
};
