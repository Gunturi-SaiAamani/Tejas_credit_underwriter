import { ArrowRight, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BusinessInfo() {
    const navigate = useNavigate()
  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-50">

      <div className="mx-auto max-w-4xl px-6 py-14">

        {/* Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Business application
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Tell us about your business
          </h1>

          <p className="mt-3 max-w-xl text-slate-600">
            Start by giving us some basic information about your business.
            You can provide your financial records in the next steps.
          </p>
        </div>


        {/* Progress */}
        <div className="mt-10 flex items-center">

          <Step
            number="1"
            label="Business"
            active
          />

          <Line />

          <Step
            number="2"
            label="Loan"
          />

          <Line />

          <Step
            number="3"
            label="Documents"
          />

          <Line />

          <Step
            number="4"
            label="Review"
          />

        </div>


        {/* Form */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          {/* Form heading */}
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Building2 className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                Business details
              </h2>

              <p className="text-sm text-slate-500">
                Basic information about your business
              </p>
            </div>

          </div>


          {/* Inputs */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <Input
              label="Business name"
              placeholder="e.g. Sri Lakshmi Textiles"
              required
            />

            <Input
              label="Business type"
              placeholder="e.g. Retail, Manufacturing"
              required
            />

            <Input
              label="Years in business"
              placeholder="e.g. 4"
              type="number"
              required
            />

            <Input
              label="City"
              placeholder="e.g. Thanjavur"
              required
            />

          </div>


          {/* Footer */}
          <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">

            <p className="text-sm text-slate-400">
              Step 1 of 4
            </p>

            <button onClick={navigate('/loan-information')}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
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


function Input({
  label,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-blue-600">*</span>
        )}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
      />

    </div>
  );
}


function Step({ number, label, active = false }) {
  return (
    <div className="flex shrink-0 items-center gap-2">

      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
          active
            ? "bg-slate-900 text-white"
            : "border border-slate-300 bg-white text-slate-400"
        }`}
      >
        {number}
      </div>

      <span
        className={`hidden text-sm font-medium sm:block ${
          active ? "text-slate-900" : "text-slate-400"
        }`}
      >
        {label}
      </span>

    </div>
  );
}


function Line() {
  return (
    <div className="mx-3 h-px flex-1 bg-slate-200" />
  );
}