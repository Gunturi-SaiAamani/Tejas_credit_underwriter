import { Routes,Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"
import BusinessInfo from "./pages/BusinessInfo"
import LenderDashboard from "./pages/LenderDashboard"

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/business" element={<BusinessInfo />} />
        <Route path="/lender" element={<LenderDashboard />} />
      </Routes>
    </div>
  )
}

export default App