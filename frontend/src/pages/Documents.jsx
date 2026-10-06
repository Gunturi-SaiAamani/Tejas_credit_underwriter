import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { useApplication } from "../context/ApplicationContext";

function Documents() {
  const navigate = useNavigate();

  const { application, updateDocuments } = useApplication();

  const documents = application.documents;

  const handleFileChange = (type, files) => {
    const selectedFiles = Array.from(files).map((file) => ({
      name: file.name,
      type: file.type,
      size: file.size,
    }));

    updateDocuments({
      [type]: [
        ...(documents[type] || []),
        ...selectedFiles,
      ],
    });
  };

  const handleContinue = () => {
    navigate("/review");
  };

  const DocumentUpload = ({ title, type }) => (
    <div className="rounded-xl border border-gray-200 p-5">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
          <Upload className="h-4 w-4 text-gray-600" />
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900">
            {title}
          </h3>

          <p className="text-xs text-gray-500">
            PDF, JPG, JPEG or PNG
          </p>
        </div>

      </div>

      <input
        type="file"
        multiple
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) =>
          handleFileChange(type, e.target.files)
        }
        className="mt-4 block w-full text-sm text-gray-500
          file:mr-4 file:rounded-lg file:border-0
          file:bg-gray-100 file:px-4 file:py-2
          file:text-sm file:font-medium file:text-gray-700"
      />

      {documents[type]?.length > 0 && (
        <div className="mt-4 space-y-2">

          {documents[type].map((file, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-50 px-3 py-2"
            >
              <p className="text-xs font-medium text-gray-700">
                {file.name}
              </p>

              <p className="text-[11px] text-gray-400">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
          ))}

        </div>
      )}

    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">

        <p className="text-sm text-gray-500">
          Step 3 of 4
        </p>

        <h1 className="mt-1 text-2xl font-semibold text-gray-900">
          Upload your documents
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          You can upload documents now or come back later.
        </p>

        <div className="mt-8 grid grid-cols-4 gap-2">
          <div className="h-1 rounded-full bg-black" />
          <div className="h-1 rounded-full bg-black" />
          <div className="h-1 rounded-full bg-black" />
          <div className="h-1 rounded-full bg-gray-200" />
        </div>

        <div className="mt-8 space-y-4">

          <DocumentUpload
            title="UPI Transactions"
            type="upiTransactions"
          />

          <DocumentUpload
            title="Bills"
            type="bills"
          />

          <DocumentUpload
            title="Invoices"
            type="invoices"
          />

          <DocumentUpload
            title="Ledgers"
            type="ledgers"
          />

        </div>

        <div className="mt-8 flex gap-3">

          <button
            onClick={() => navigate("/loan-information")}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <button
            onClick={handleContinue}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>

        </div>

      </div>
    </div>
  );
}

export default Documents;