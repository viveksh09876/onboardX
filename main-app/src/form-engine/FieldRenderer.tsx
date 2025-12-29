import type { FieldConfig } from "./types";
import { useLabel } from "./useLabels";

interface Props {
  field: FieldConfig;
  value: any;
  onChange: (val: any) => void;
}

const FieldRenderer = ({ field, value, onChange }: Props) => {
  const label = useLabel(field.labelKey);

  switch (field.type) {
    case "text":
      return (
        <div>
          <label className="block mb-1">{label}</label>
          <input
            className="border p-2 w-full"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      );

    case "select":
      return (
        <div>
          <label className="block mb-1">{label}</label>
          <select
            className="border p-2 w-full"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="">Select</option>
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {useLabel(opt.labelKey)}
              </option>
            ))}
          </select>
        </div>
      );

    default:
      return null;
  }
};

export default FieldRenderer;
