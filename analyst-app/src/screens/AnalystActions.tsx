import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";

const ANALYST_DECISION = gql`
  mutation AnalystDecision($input: AnalystDecisionInput!) {
    analystDecision(input: $input) {
      applicationId
      version
      status
    }
  }
`;

interface Props {
  applicationId: string;
}

const AnalystActions = ({ applicationId }: Props) => {
  const [comment, setComment] = useState("");
  const [decision] = useMutation(ANALYST_DECISION);

  const submit = async (status: "APPROVED" | "REJECTED") => {
    await decision({
      variables: {
        input: {
          applicationId,
          status,
          comment,
        },
      },
    });

    alert(`Application ${status}`);
  };

  return (
    <div className="space-y-2">
      <textarea
        className="border w-full p-2"
        placeholder="Analyst comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="flex gap-2">
        <button
          className="bg-green-600 text-white px-4 py-2"
          onClick={() => submit("APPROVED")}
        >
          Approve
        </button>

        <button
          className="bg-red-600 text-white px-4 py-2"
          onClick={() => submit("REJECTED")}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default AnalystActions;
