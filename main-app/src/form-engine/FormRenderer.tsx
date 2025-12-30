import type { FormConfig } from "./types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  updateDomainData,
  updateDynamicAnswer,
  setErrors,
  clearErrors,
} from "../store/formSlice";
import { isFieldVisible } from "./conditions";
import FieldRenderer from "./FieldRenderer";
import { validateStep } from "./validation/validateStep";
import { useNavigate } from "react-router-dom";

interface Props {
  domain: "personal" | "business" | "teams" | "products";
  config: FormConfig;
  nextRoute: string;
}

const FormRenderer = ({ domain, config, nextRoute }: Props) => {
  const dispatch = useAppDispatch();
  const domainData = useAppSelector((s) => s.form.formData[domain]);
  const navigate = useNavigate();
  const errors = useAppSelector((s) => s.form.errors[domain]);

  const dynamicQuestions = useAppSelector(
    (s) => s.form.additionalQuestions[domain] || []
  );

  const allFields = [
    ...config.fields,
    ...dynamicQuestions.map((q) => ({
      ...q,
      id: q.questionId,
    })),
  ];

  const updateField = (id: string, value: any) => {
    dispatch(clearErrors({ domain }));
    dispatch(updateDomainData({ domain, data: { [id]: value } }));
  };

  const handleNext = () => {
    const validationErrors = validateStep(config, domainData);

    if (Object.keys(validationErrors).length > 0) {
      dispatch(
        setErrors({
          domain,
          errors: validationErrors,
        })
      );
      return;
    }

    dispatch(clearErrors({ domain }));
    navigate(nextRoute);
  };

  return (
    <div className="space-y-4">
      {allFields
        .filter((f) => isFieldVisible(f, domainData))
        .map((field) => (
          <FieldRenderer
            key={field.id}
            field={field}
            value={
              domainData[field.id] ??
              dynamicQuestions.find((q) => q.questionId === field.id)?.answer
            }
            error={errors?.[field.id]}
            onChange={(val) => {
              if (field.questionId) {
                dispatch(
                  updateDynamicAnswer({
                    domain,
                    questionId: field.id,
                    value: val,
                  })
                );
              } else {
                updateField(field.id, val);
              }
            }}
          />
        ))}

      <div className="flex justify-end pt-4">
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormRenderer;
