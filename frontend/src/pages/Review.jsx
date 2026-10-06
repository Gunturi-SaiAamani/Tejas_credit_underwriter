import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Building2,
  IndianRupee,
  FileText,
} from "lucide-react";

import { useApplication } from "../context/ApplicationContext";

function Review() {
  const navigate = useNavigate();

  const {
    application,
    submitApplication,
  } = useApplication();

  const {
    business,
    loan,
    documents,
  } = application;

  const documentCount = (type) => {
    return documents[type]?.length || 0;
  };

  const totalDocuments =
    documentCount("upiTransactions") +
    documentCount("bills") +
    documentCount("invoices") +
    documentCount("ledgers");

  const handleSubmit = () => {
    if (
      !business.businessName ||
      !business.businessType ||
      !business.yearsInBusiness ||
      !business.city
    ) {
      alert("Please complete your business information.");
      navigate("/business");
      return;
    }

    if (
      !loan.amount ||
      !loan.purpose ||
      !loan.tenure
    ) {
      alert("Please complete your loan information.");
      navigate("/loan-information");
      return;
    }

    submitApplication();

    alert(
      `Application ${application.applicationId} submitted successfully!`
    );

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">

        <p className="text-sm text-gray-500">
          Step 4 of 4
        </p>

        <h1 className="mt-1 text-2xl font-semibold text-gray-900">
          Review your application
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Check your information before submitting.
        </p>

        {/* Application ID */}
        <div className="mt-6 rounded-xl bg-gray-900 p-5 text-white">
          <p className="text-xs text-gray-400">
            Application ID
          </p>

          <p className="mt-1 text-lg font-semibold tracking-wide">
            {application.applicationId}
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Status: {application.status}
          </p>
        </div>

        {/* Business */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-gray-600" />

              <h2 className="font-semibold">
                Business Information
              </h2>
            </div>

            <button
              onClick={() => navigate("/business")}
              className="text-sm font-medium"
            >
              Edit
            </button>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            <div>
              <p className="text-xs text-gray-500">
                Business name
              </p>
              <p className="mt-1 text-sm font-medium">
                {business.businessName || "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Business type
              </p>
              <p className="mt-1 text-sm font-medium">
                {business.businessType || "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Years in business
              </p>
              <p className="mt-1 text-sm font-medium">
                {business.yearsInBusiness
                  ? `${business.yearsInBusiness} years`
                  : "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                City
              </p>
              <p className="mt-1 text-sm font-medium">
                {business.city || "Not provided"}
              </p>
            </div>

          </div>
        </div>

        {/* Loan */}
        <div className="mt-4 rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IndianRupee className="h-5 w-5 text-gray-600" />

              <h2 className="font-semibold">
                Loan Information
              </h2>
            </div>

            <button
              onClick={() => navigate("/loan-information")}
              className="text-sm font-medium"
            >
              Edit
            </button>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            <div>
              <p className="text-xs text-gray-500">
                Loan amount
              </p>
              <p className="mt-1 text-sm font-medium">
                {loan.amount
                  ? `₹${Number(
                      loan.amount
                    ).toLocaleString("en-IN")}`
                  : "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Purpose
              </p>
              <p className="mt-1 text-sm font-medium">
                {loan.purpose || "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Tenure
              </p>
              <p className="mt-1 text-sm font-medium">
                {loan.tenure || "Not provided"}
              </p>
            </div>

          </div>
        </div>

        {/* Documents */}
        <div className="mt-4 rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-gray-600" />

              <h2 className="font-semibold">
                Documents
              </h2>
            </div>

            <button
              onClick={() => navigate("/documents")}
              className="text-sm font-medium"
            >
              Edit
            </button>
          </div>

          <div className="mt-5 space-y-3">

            <div className="flex justify-between text-sm">
              <span>UPI Transactions</span>
              <span className="font-medium">
                {documentCount("upiTransactions")}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Bills</span>
              <span className="font-medium">
                {documentCount("bills")}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Invoices</span>
              <span className="font-medium">
                {documentCount("invoices")}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Ledgers</span>
              <span className="font-medium">
                {documentCount("ledgers")}
              </span>
            </div>

            <div className="border-t pt-3 flex justify-between text-sm font-semibold">
              <span>Total documents</span>
              <span>{totalDocuments}</span>
            </div>

          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={application.status === "SUBMITTED"}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <CheckCircle2 className="h-4 w-4" />

          {application.status === "SUBMITTED"
            ? "Application Submitted"
            : "Submit Application"}
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-3 flex w-full items-center justify-center gap-2 text-sm text-gray-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to application
        </button>

      </div>
    </div>
  );
}

export default Review;