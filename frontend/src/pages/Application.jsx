
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useApplication } from "../context/ApplicationContext";

function Application() {
  const navigate = useNavigate();

  const { application, createApplication } = useApplication();

  const isSubmitted = application.status === "SUBMITTED";

  const handleStart = () => {
    createApplication();
    navigate("/dashboard");
  };

  const handleResume = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">

        <h1 className="text-4xl font-semibold text-gray-900">
          MSME Credit Platform
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Apply for business credit by sharing your business,
          loan requirements and supporting documents.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">

          {!application.applicationId || isSubmitted ? (
            <button
              onClick={handleStart}
              className="flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-medium text-white"
            >
              Start Application
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <>
              <button
                onClick={handleResume}
                className="flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-medium text-white"
              >
                Continue Application
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-sm text-gray-500">
                Application ID:{" "}
                <span className="font-semibold text-gray-900">
                  {application.applicationId}
                </span>
              </p>
            </>
          )}

        </div>

      </div>
    </div>
  );
}

export default Application;