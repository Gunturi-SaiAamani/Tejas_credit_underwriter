import { useNavigate } from "react-router-dom";
import { useApplication } from "../context/ApplicationContext";

function OwnerDashboard() {
  const navigate = useNavigate();

  const { application, resetApplication } = useApplication();

  const handleNewApplication = () => {
    const confirmNew = window.confirm(
      "Start a new application? Your current draft will be removed."
    );

    if (confirmNew) {
      resetApplication();
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div>
          <p className="text-sm text-gray-500">
            Application
          </p>

          <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <h1 className="text-2xl font-semibold text-gray-900">
              {application.applicationId || "No application"}
            </h1>

            <span
              className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                application.status === "SUBMITTED"
                  ? "bg-green-50 text-green-700"
                  : "bg-yellow-50 text-yellow-700"
              }`}
            >
              {application.status}
            </span>

          </div>

          <p className="mt-2 text-sm text-gray-500">
            Complete each section whenever you're ready.
            You can come back later.
          </p>
        </div>

        {/* Application Sections */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

          <div className="space-y-4">

            {/* Business */}
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium text-gray-900">
                  Business Information
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {application.business.businessName
                    ? "Completed"
                    : "Not completed"}
                </p>
              </div>

              <button
                onClick={() => navigate("/business")}
                className="text-sm font-medium text-gray-900"
              >
                Open →
              </button>
            </div>

            {/* Loan */}
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium text-gray-900">
                  Loan Information
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {application.loan.amount
                    ? "Completed"
                    : "Not completed"}
                </p>
              </div>

              <button
                onClick={() => navigate("/loan-information")}
                className="text-sm font-medium text-gray-900"
              >
                Open →
              </button>
            </div>

            {/* Documents */}
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium text-gray-900">
                  Documents
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {Object.values(application.documents).flat().length} files
                </p>
              </div>

              <button
                onClick={() => navigate("/documents")}
                className="text-sm font-medium text-gray-900"
              >
                Upload →
              </button>
            </div>

            {/* Review */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  Review Application
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Check everything before submitting
                </p>
              </div>

              <button
                onClick={() => navigate("/review")}
                className="text-sm font-medium text-gray-900"
              >
                Review →
              </button>
            </div>

          </div>

        </div>

        {/* Application ID */}
        <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center">

          <p className="text-sm text-gray-500">
            Your Application ID
          </p>

          <p className="mt-2 text-xl font-semibold tracking-wide text-gray-900">
            {application.applicationId}
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Keep this ID safe. You can use it to identify your
            application with the lender.
          </p>

        </div>

        {/* New Application */}
        <button
          onClick={handleNewApplication}
          className="mt-6 text-sm text-gray-500"
        >
          Start a new application
        </button>

      </div>
    </div>
  );
}

export default OwnerDashboard;