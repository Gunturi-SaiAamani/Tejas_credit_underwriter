import { Routes,Route } from "react-router-dom"

import { ApplicationProvider } from "./context/ApplicationContext"
import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"
import BusinessInfo from "./pages/BusinessInfo"
import LenderDashboard from "./pages/LenderDashboard"
import LoanInformation from "./pages/LoanInformation"
import Documents from "./pages/Documents"
import Review from "./pages/Review"
import Login from "./pages/Login"
import OwnerDashboard from "./pages/OwnerDashboard"
import Register from "./pages/Register"
import OTP from "./pages/OTP"
import Application from "./pages/Application"

const App = () => {
  return (
    <div>
      <Navbar />

      <ApplicationProvider>
      <Routes>
       
        <Route path="/" element={<Landing />} />
        <Route path="/lender" element={<LenderDashboard />} />
        <Route path="/application" element={<Application />} />
           <Route path="/dashboard" element={<OwnerDashboard />} />
        <Route path="/business" element={<BusinessInfo />} /> 
        <Route path="/loan-information" element={<LoanInformation />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/review" element={<Review />} />
        </Routes>
        </ApplicationProvider>
      
    </div>
  )
}

export default App