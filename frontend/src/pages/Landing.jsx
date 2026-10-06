import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-50">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              AI-assisted MSME credit assessment
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Turn messy business records into
              <span className="text-blue-600">
                {" "}financial clarity.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              UdyamFlow helps transform invoices, UPI transactions,
              bills and ledgers into structured financial information
              that lenders can understand and verify.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/application"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800"
              >
                I'm a Business Owner
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/lender"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                I'm a Lender
              </Link>

            </div>

            <div className="mt-8 flex flex-col gap-3">

  <Feature
    icon="✓"
    text="No formal statements required"
  />

  <Feature
    icon="✓"
    text="Works with existing records"
  />

  <Feature
    icon="✓"
    text="Explainable assessment"
  />

</div>

          </div>

         {/* Right */}
<div className="relative">

  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

    {/* Header */}
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        The problem
      </p>

      <h2 className="mt-2 text-2xl font-bold text-slate-900">
        Financial records are everywhere.
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        MSMEs often have financial information spread across
        different documents and platforms.
      </p>
    </div>


    {/* Messy records */}
    <div className="space-y-3">

      <Record
        icon="🧾"
        title="Invoices & Bills"
        subtitle="Different formats"
      />

      <Record
        icon="📱"
        title="UPI Transactions"
        subtitle="Transaction history"
      />

      <Record
        icon="📒"
        title="Ledgers"
        subtitle="Manually maintained"
      />

    </div>


    {/* Arrow */}
    <div className="my-6 flex items-center gap-3">
      <div className="h-px flex-1 bg-slate-200" />

      <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
        AI + Validation
      </div>

      <div className="h-px flex-1 bg-slate-200" />
    </div>


    {/* Structured output */}
    <div className="rounded-2xl bg-slate-900 p-5">

      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        Structured financial information
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">

        <OutputItem
          label="Revenue"
          value="₹8.2L"
        />

        <OutputItem
          label="Expenses"
          value="₹5.5L"
        />

        <OutputItem
          label="Cash Flow"
          value="Positive"
        />

        <OutputItem
          label="Records"
          value="Verified"
        />

      </div>

    </div>

  </div>

</div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-slate-200 bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              From messy records to a clear financial picture
            </h2>

            <p className="mt-4 text-slate-600">
              The system organizes financial evidence, validates it,
              analyzes cash flow and highlights important inconsistencies.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <Step
              number="01"
              title="Upload records"
              description="Businesses upload invoices, bills, UPI records, bank statements and ledgers."
            />

            <Step
              number="02"
              title="Understand & verify"
              description="AI extracts information while backend validation checks and reconciles the records."
            />

            <Step
              number="03"
              title="Assess financial health"
              description="Lenders receive financial insights, risk indicators and explainable findings."
            />

          </div>

        </div>

      </section>

    </div>
  );
}



function Step({ number, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

      <span className="text-sm font-bold text-blue-600">
        {number}
      </span>

      <h3 className="mt-3 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}

function Record({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-900">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-slate-500">
          {subtitle}
        </p>
      </div>

    </div>
  );
}


function OutputItem({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-800 p-3">

      <p className="text-xs text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-white">
        {value}
      </p>

    </div>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex flex-col gap-4">
    <div className="flex flex-row items-center gap-2">
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
      {icon}
    </span>
    <p className="text-sm leading-5 text-gray-500">
      {text}
    </p>
  </div>
    </div>
  );
}