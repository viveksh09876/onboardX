import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { updateDomainData } from "../../store/formSlice";

const ProductsScreen = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNext = () => {
    dispatch(
      updateDomainData({
        domain: "products",
        data: {
          name: "IT Services",
        },
      })
    );

    navigate("/teams");
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
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsScreen;
