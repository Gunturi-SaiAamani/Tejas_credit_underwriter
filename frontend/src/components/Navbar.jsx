import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              UdyamFlow
            </h1>

            <p className="text-xs text-slate-500">
              MSME Financial Intelligence
            </p>
          </div>
        </Link>


        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm font-medium">

          <Link
            to="/business"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Business Owner
          </Link>

          <Link
            to="/lender"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Lender
          </Link>

          <Link
            to="/login"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-slate-900 px-4 py-2.5 font-semibold text-white transition hover:bg-slate-800"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}