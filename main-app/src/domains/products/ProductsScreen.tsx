import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client/react";
import { SUBMIT_APPLICATION } from "../../graphql/mutations/applicationMutations";
import { useAppSelector } from "../../store/hooks";

const ProductsScreen = () => {
  const navigate = useNavigate();
  const [submit] = useMutation(SUBMIT_APPLICATION);

  const applicationId = useAppSelector((s) => s.form.applicationId);

  const formData = useAppSelector((s) => s.form.formData);

  const additionalQuestions = useAppSelector((s) => s.form.additionalQuestions);

  const handleSubmit = async () => {
    await submit({
      variables: {
        input: {
          applicationId,
          formData: {
            ...formData,
            additionalQuestions,
          },
        },
      },
    });

    navigate("/thank-you");
  };

  const handleBack = () => {
    navigate("/teams");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Products Details</h2>

      <p className="mb-4">Products form fields go here</p>

      <div className="flex gap-2">
        <button onClick={handleBack} className="bg-gray-300 px-4 py-2 rounded">
          Back
        </button>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProductsScreen;
