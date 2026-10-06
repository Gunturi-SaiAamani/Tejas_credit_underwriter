import { useNavigate } from "react-router-dom";
import { IndianRupee, ArrowLeft, ArrowRight } from "lucide-react";
import { useApplication } from "../context/ApplicationContext";

function LoanInformation() {
  const navigate = useNavigate();

  const { application, updateLoan } = useApplication();

  const loan = application.loan;

  const handleContinue = () => {
    if (
      !loan.amount ||
      !loan.purpose ||
      !loan.tenure 
    ) {
      alert("Please complete all loan details");
      return;
    }

    navigate("/documents");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
              <IndianRupee className="h-5 w-5 text-gray-700" />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Step 2 of 4
              </p>

              <h1 className="text-2xl font-semibold text-gray-900">
                Tell us about your loan
              </h1>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Tell us how much funding your business needs.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-8 grid grid-cols-4 gap-2">
          <div className="h-1 rounded-full bg-black" />
          <div className="h-1 rounded-full bg-black" />
          <div className="h-1 rounded-full bg-gray-200" />
          <div className="h-1 rounded-full bg-gray-200" />
        </div>

        {/* Form */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

          {/* Loan Amount */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Loan amount
            </label>

            <div className="relative mt-2">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                ₹
              </span>

              <input
                type="number"
                min="0"
                value={loan.amount}
                onChange={(e) =>
                  updateLoan({
                    amount: e.target.value,
                  })
                }
                placeholder="Enter loan amount"
                className="w-full rounded-xl border border-gray-200 py-3 pl-9 pr-4 outline-none focus:border-gray-400"
              />
            </div>
          </div>

          {/* Purpose */}
          <div className="mt-5">
            <label className="text-sm font-medium text-gray-700">
              Loan purpose
            </label>

            <select
              value={loan.purpose}
              onChange={(e) =>
                updateLoan({
                  purpose: e.target.value,
                })
              }
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
            >
              <option value="">Select loan purpose</option>
              <option value="Working capital">Working capital</option>
              <option value="Business expansion">Business expansion</option>
              <option value="Equipment purchase">Equipment purchase</option>
              <option value="Inventory">Inventory</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Tenure */}
          <div className="mt-5">
            <label className="text-sm font-medium text-gray-700">
              Preferred loan tenure
            </label>

            <select
              value={loan.tenure}
              onChange={(e) =>
                updateLoan({
                  tenure: e.target.value,
                })
              }
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
            >
              <option value="">Select tenure</option>
              <option value="12 months">12 months</option>
              <option value="24 months">24 months</option>
              <option value="36 months">36 months</option>
              <option value="48 months">48 months</option>
              <option value="60 months">60 months</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-3">

            <button
              onClick={() => navigate("/business")}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700"
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
    </div>
  );
}

export default LoanInformation;