import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client/react";

import FormRenderer from "../../form-engine/FormRenderer";
import { productsFormConfig } from "./products.form";
import { SUBMIT_APPLICATION, SAVE_DRAFT } from "../../graphql/mutations/applicationMutations";

import { useAppSelector } from "../../store/hooks";

const ProductsScreen = () => {
  const navigate = useNavigate();
  const [saveDraft] = useMutation(SAVE_DRAFT);
  const [submit] = useMutation(SUBMIT_APPLICATION);

  const applicationId = useAppSelector((s) => s.form.applicationId);

  const formData = useAppSelector((s) => s.form.formData);

  const additionalQuestions = useAppSelector((s) => s.form.additionalQuestions);

  const handleSubmit = async () => {
    // 1. Save current state
    await saveDraft({
      variables: {
        input: {
          applicationId,
          domain: "products",
          data: {
            ...formData,
            additionalQuestions,
          },
        },
      },
    });

    // 2. Submit application
    await submit({
      variables: {
        input: {
          applicationId,
        },
      },
    });

    navigate("/thank-you");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Product Details</h2>

      <FormRenderer
        domain="products"
        config={productsFormConfig}
        nextRoute="" // not used on last step
      />

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default ProductsScreen;
