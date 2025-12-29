import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { updateDomainData } from "../../store/formSlice";
import FormRenderer from "../../form-engine/FormRenderer";
import { personalFormConfig } from "./personal.form";

const PersonalScreen = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNext = () => {
    dispatch(
      updateDomainData({
        domain: "personal",
        data: {
          firstName: "Vivek",
          lastName: "Sharma",
        },
      })
    );

    navigate("/business");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>

      <FormRenderer
        domain="personal"
        config={personalFormConfig}
        nextRoute="/business"
      />

      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default PersonalScreen;
