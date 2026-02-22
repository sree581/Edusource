import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/home";
import HospitalAdmin from "./pages/hospitaladmin";
import HRManagement from "./pages/hr";
import TravelTourism from "./pages/traveltourism";
import LogisticsShipping from "./pages/logistics";
import GermanLanguage from "./pages/german";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospital-administration" element={<HospitalAdmin />} />
        <Route path="/hr-management" element={<HRManagement />} />
        <Route path="/travel-tourism" element={<TravelTourism />} />
        <Route path="/logistics-shipping" element={<LogisticsShipping />} />
        <Route path="/german-language" element={<GermanLanguage />} />
      </Routes>
    </Router>
  );
}

export default App;