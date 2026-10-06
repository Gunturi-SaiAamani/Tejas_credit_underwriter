import { useNavigate } from "react-router-dom";
import { Building2, ArrowRight } from "lucide-react";
import { useApplication } from "../context/ApplicationContext";

function BusinessInfo() {
  const navigate = useNavigate();

  const { application, updateBusiness } = useApplication();

  const business = application.business;

  const handleContinue = () => {
    if (
      !business.businessName ||
      !business.businessType ||
      !business.yearsInBusiness ||
      !business.city
    ) {
      alert("Please complete all business details");
      return;
    }

    navigate("/loan-information");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
              <Building2 className="h-5 w-5 text-gray-700" />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Step 1 of 4
              </p>

              <h1 className="text-2xl font-semibold text-gray-900">
                Tell us about your business
              </h1>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Provide some basic information about your business.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-8 grid grid-cols-4 gap-2">
          <div className="h-1 rounded-full bg-black" />
          <div className="h-1 rounded-full bg-gray-200" />
          <div className="h-1 rounded-full bg-gray-200" />
          <div className="h-1 rounded-full bg-gray-200" />
        </div>

        {/* Form */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

          {/* Business Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Business name
            </label>

            <input
              type="text"
              value={business.businessName}
              onChange={(e) =>
                updateBusiness({
                  businessName: e.target.value,
                })
              }
              placeholder="Enter your business name"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
            />
          </div>

          {/* Business Type */}
          <div className="mt-5">
            <label className="text-sm font-medium text-gray-700">
              Business type
            </label>

            <select
              value={business.businessType}
              onChange={(e) =>
                updateBusiness({
                  businessType: e.target.value,
                })
              }
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
            >
              <option value="">Select business type</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Services">Services</option>
              <option value="Wholesale">Wholesale</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Years */}
          <div className="mt-5">
            <label className="text-sm font-medium text-gray-700">
              Years in business
            </label>

            <input
              type="number"
              min="0"
              value={business.yearsInBusiness}
              onChange={(e) =>
                updateBusiness({
                  yearsInBusiness: e.target.value,
                })
              }
              placeholder="e.g. 4"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
            />
          </div>

          {/* City */}
          <div className="mt-5">
            <label className="text-sm font-medium text-gray-700">
              City
            </label>

            <input
              type="text"
              value={business.city}
              onChange={(e) =>
                updateBusiness({
                  city: e.target.value,
                })
              }
              placeholder="Enter your city"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
            />
          </div>

          {/* Continue */}
          <button
            onClick={handleContinue}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>

        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;