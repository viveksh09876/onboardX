import FormRenderer from "../../form-engine/FormRenderer";
import { personalFormConfig } from "./personal.form";

const PersonalScreen = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>

      <FormRenderer
        domain="personal"
        config={personalFormConfig}
        nextRoute="/business"
      />
    </div>
  );
};

export default PersonalScreen;
