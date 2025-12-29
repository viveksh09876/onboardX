import type { FormConfig } from "./types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateDomainData } from "../store/formSlice";
import { isFieldVisible } from "./conditions";
import FieldRenderer from "./FieldRenderer";

interface Props {
  domain: "personal" | "business" | "teams" | "products";
  config: FormConfig;
  nextRoute: string;
}

const FormRenderer = ({ domain, config, nextRoute }: Props) => {
  const dispatch = useAppDispatch();
  const domainData = useAppSelector((s) => s.form.formData[domain]);

  const updateField = (id: string, value: any) => {
    dispatch(updateDomainData({ domain, data: { [id]: value } }));
  };

  return (
    <div className="space-y-4">
      {config.fields
        .filter((f) => isFieldVisible(f, domainData))
        .map((field) => (
          <FieldRenderer
            key={field.id}
            field={field}
            value={domainData[field.id]}
            onChange={(val) => updateField(field.id, val)}
          />
        ))}
    </div>
  );
};

export default FormRenderer;
