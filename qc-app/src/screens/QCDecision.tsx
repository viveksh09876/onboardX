import { useMutation } from "@apollo/client/react";
import { QC_DECISION } from "../graphql/mutations/qcDecision";

const QCDecision = ({ applicationId }: { applicationId: string }) => {
  const [decision] = useMutation(QC_DECISION);

  const submit = async (status: "QC_PASSED" | "QC_FAILED") => {
    await decision({
      variables: {
        input: {
          applicationId,
          status,
        },
      },
    });

    alert(`QC ${status}`);
  };

  return (
    <div className="flex gap-2">
      <button
        className="bg-green-600 text-white px-4 py-2"
        onClick={() => submit("QC_PASSED")}
      >
        QC Pass
      </button>

      <button
        className="bg-red-600 text-white px-4 py-2"
        onClick={() => submit("QC_FAILED")}
      >
        QC Fail
      </button>
    </div>
  );
};

export default QCDecision;
