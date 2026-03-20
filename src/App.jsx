import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/home";
import HospitalAdmin from "./pages/hospitaladmin";
import HRManagement from "./pages/hr";
import MedicalTranscription from "./pages/medicaltrans";
import LogisticsShipping from "./pages/logistics";
import GermanLanguage from "./pages/german";
import MedicalCoding from "./pages/medicalcoding";
import Admissions from "./pages/admissions";
import Placements from "./pages/placements";
import Blog from "./pages/blog";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospital-administration" element={<HospitalAdmin />} />
        <Route path="/hr-management" element={<HRManagement />} />
        <Route path="/medical-transcription" element={<MedicalTranscription />} />
        <Route path="/logistics-shipping" element={<LogisticsShipping />} />
        <Route path="/german-language" element={<GermanLanguage />} />
        <Route path="/medical-coding" element={<MedicalCoding />} />
        <Route path="/admission" element={<Admissions />} />
        <Route path="/placement" element={<Placements />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
    </Router>
  );
}

export default App;