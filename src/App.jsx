import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/home";
import ScrollToTop from "./components/ScrollToTop";
import CountUp from "react-countup";
import HospitalAdmin from "./pages/hospitaladmin";
import HRManagement from "./pages/hr";
import MedicalTranscription from "./pages/medicaltrans";
import LogisticsShipping from "./pages/logistics";
import GermanLanguage from "./pages/german";
import GermanA1 from "./pages/germanA1";
import GermanA2 from "./pages/germanA2";
import GermanB1 from "./pages/germanB1";
import GermanB2 from "./pages/germanB2";
import MedicalCoding from "./pages/medicalcoding";
import AIDigitalMarketing from "./pages/aidigitalmarketing";
import AIVideoEditing from "./pages/aivideoediting";
import Admissions from "./pages/admissions";
import Placements from "./pages/placements";
import Blog from "./pages/blog";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospital-administration" element={<HospitalAdmin />} />
        <Route path="/hr-management" element={<HRManagement />} />
        <Route path="/medical-transcription" element={<MedicalTranscription />} />
        <Route path="/logistics-shipping" element={<LogisticsShipping />} />
        <Route path="/german-language" element={<GermanLanguage />} />
        <Route path="/german-a1" element={<GermanA1 />} />
<Route path="/german-a2" element={<GermanA2 />} />
<Route path="/german-b1" element={<GermanB1 />} />
<Route path="/german-b2" element={<GermanB2 />} />
        <Route path="/medical-coding" element={<MedicalCoding />} />
        <Route path="/ai-digital-marketing" element={<AIDigitalMarketing />} />
        <Route path="/ai-video-editing" element={<AIVideoEditing />} />
        <Route path="/admission" element={<Admissions />} />
        <Route path="/placement" element={<Placements />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
    </Router>
  );
}

export default App;