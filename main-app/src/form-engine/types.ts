export type FieldType = "text" | "number" | "select" | "checkbox" | "array";

export interface Condition {
  fieldId: string;
  equals?: any;
  notEquals?: any;
}

export interface FieldConfig {
  id: string;
  type: FieldType;
  labelKey: string;
  required?: boolean;

  options?: { labelKey: string; value: any }[];
  optionsRef?: string; // backend reference data

  conditions?: Condition[];

  fields?: FieldConfig[]; // for array / add-more
}

export interface FormConfig {
  fields: FieldConfig[];
}
