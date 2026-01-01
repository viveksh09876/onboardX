import FormRenderer from "../../form-engine/FormRenderer";
import { teamsFormConfig } from "./teams.form";

const TeamsScreen = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Team Details</h2>

      <FormRenderer
        domain="teams"
        config={teamsFormConfig}
        nextRoute="/products"
      />
    </div>
  );
};

export default TeamsScreen;
