import { Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./pages/landing.jsx";
import Scan from "./pages/scan.jsx";
import Result from "./pages/result.jsx";
import Information from "./pages/information";
import Tes from "./pages/tes.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/result" element={<Result />} />
        <Route path="/info" element={<Information />} />
        <Route path="/tes" element={<Tes />} />
      </Routes>
    </>
  );
}

export default App;
