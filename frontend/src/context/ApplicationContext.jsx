import { createContext, useContext, useEffect, useState } from "react";

const ApplicationContext = createContext();

const STORAGE_KEY = "msme_application";

const createEmptyApplication = () => ({
  applicationId: null,
  status: "DRAFT",

  business: {
    businessName: "",
    businessType: "",
    yearsInBusiness: "",
    city: "",
  },

  loan: {
    amount: "",
    purpose: "",
    tenure: "",
    monthlyRepayment: "",
  },

  documents: {
    upiTransactions: [],
    bills: [],
    invoices: [],
    ledgers: [],
  },
});

function generateApplicationId() {
  const random = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  return `APP-TJ-${random}`;
}

export function ApplicationProvider({ children }) {
  const [application, setApplication] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return createEmptyApplication();
      }
    }

    return createEmptyApplication();
  });

  useEffect(() => {
    if (application.applicationId) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(application)
      );
    }
  }, [application]);

  const createApplication = () => {
    const newApplication = createEmptyApplication();

    newApplication.applicationId = generateApplicationId();

    setApplication(newApplication);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(newApplication)
    );

    return newApplication.applicationId;
  };

  const updateBusiness = (data) => {
    setApplication((prev) => ({
      ...prev,
      business: {
        ...prev.business,
        ...data,
      },
    }));
  };

  const updateLoan = (data) => {
    setApplication((prev) => ({
      ...prev,
      loan: {
        ...prev.loan,
        ...data,
      },
    }));
  };

  const updateDocuments = (data) => {
    setApplication((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        ...data,
      },
    }));
  };

  const submitApplication = () => {
    setApplication((prev) => ({
      ...prev,
      status: "SUBMITTED",
    }));
  };

  const resetApplication = () => {
    localStorage.removeItem(STORAGE_KEY);
    setApplication(createEmptyApplication());
  };

  return (
    <ApplicationContext.Provider
      value={{
        application,
        createApplication,
        updateBusiness,
        updateLoan,
        updateDocuments,
        submitApplication,
        resetApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplication() {
  return useContext(ApplicationContext);
}