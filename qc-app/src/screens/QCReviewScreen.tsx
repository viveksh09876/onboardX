import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_APPLICATION_VERSIONS } from "../graphql/queries/getApplicationVersions";
import { diff } from "deep-object-diff";
import type {
  GetApplicationVersionsResponse,
  GetApplicationVersionsVars,
} from "../graphql/types";
import QCDecision from "./QCDecision";

const QCReviewScreen = () => {
  const { applicationId } = useParams<{ applicationId: string }>();

  const { data, loading } = useQuery<
    GetApplicationVersionsResponse,
    GetApplicationVersionsVars
  >(GET_APPLICATION_VERSIONS, {
    variables: { applicationId: applicationId! },
  });

  if (loading) return <p>Loading...</p>;
  if (!data?.getApplicationVersions || data.getApplicationVersions.length < 2) {
    return <p>Not enough versions to compare</p>;
  }

  const versions = data.getApplicationVersions;
  const latest = versions[versions.length - 1];
  const previous = versions[versions.length - 2];

  const changes = diff(previous.formData, latest.formData);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">QC Review</h2>

      <h3 className="font-semibold">
        Changes from v{previous.version} → v{latest.version}
      </h3>

      <pre className="bg-yellow-100 p-4 rounded">
        {JSON.stringify(changes, null, 2)}
      </pre>

      <QCDecision applicationId={applicationId!} />
    </div>
  );
};

export default QCReviewScreen;
