import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

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

const submitApplication = async () => {
  try {
    const payload = {
      application_id: application.applicationId,

      business: {
        name: application.business.businessName,
        type: application.business.businessType,
        years: Number(application.business.yearsInBusiness),
        city: application.business.city,
      },

      loan: {
        amount: application.loan.amount,
        purpose: application.loan.purpose,
        tenure: Number(application.loan.tenure),
      },

      documents: [
        ...application.documents.upiTransactions.map((doc) => ({
          document_type: "upi_transactions",
          file_url: doc.fileUrl || doc.file_url || "",
          file_name: doc.fileName || doc.file_name || "",
        })),

        ...application.documents.bills.map((doc) => ({
          document_type: "bills",
          file_url: doc.fileUrl || doc.file_url || "",
          file_name: doc.fileName || doc.file_name || "",
        })),

        ...application.documents.invoices.map((doc) => ({
          document_type: "invoices",
          file_url: doc.fileUrl || doc.file_url || "",
          file_name: doc.fileName || doc.file_name || "",
        })),

        ...application.documents.ledgers.map((doc) => ({
          document_type: "ledgers",
          file_url: doc.fileUrl || doc.file_url || "",
          file_name: doc.fileName || doc.file_name || "",
        })),
      ],
    };

    const response = await api.post("/applications/", payload);

    console.log("Application submitted:", response.data);

    setApplication((prev) => ({
      ...prev,
      status: "SUBMITTED",
    }));

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error(
      "Application submission failed:",
      error.response?.data || error.message
    );

    return {
      success: false,
      error: error.response?.data || error.message,
    };
  }
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