export default function LenderDashboard() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">

      <p className="text-sm font-semibold text-blue-600">
        LENDER PORTAL
      </p>

      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Credit Assessment Dashboard
      </h1>

      <p className="mt-3 text-slate-600">
        Review MSME financial information and identify applications
        requiring further assessment.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <Card
          title="Applications"
          value="24"
        />

        <Card
          title="Under Review"
          value="8"
        />

        <Card
          title="Need Attention"
          value="3"
        />

      </div>

    </div>
  );
}


function Card({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </p>

    </div>
  );
}