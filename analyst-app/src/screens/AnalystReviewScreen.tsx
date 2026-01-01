import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_APPLICATION } from "../graphql/queries/getApplication";
import type {
  GetApplicationResponse,
  GetApplicationVars,
} from "../graphql/types";
import AnalystActions from "./AnalystActions";

const AnalystReviewScreen = () => {
  const { applicationId } = useParams<{ applicationId: string }>();

  const { data, loading } = useQuery<
    GetApplicationResponse,
    GetApplicationVars
  >(GET_APPLICATION, {
    variables: { applicationId: applicationId! },
  });

  if (loading) return <p>Loading...</p>;
  if (!data?.getApplication) {
    return <p>No data</p>;
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Application Review</h2>

      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(data.getApplication.formData, null, 2)}
      </pre>

      <AnalystActions applicationId={applicationId!} />
    </div>
  );
};

export default AnalystReviewScreen;
