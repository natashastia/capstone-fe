import { Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./pages/landing.jsx";
import Result from "./pages/result.jsx";
import Information from "./pages/information";
import Tes from "./pages/tes.jsx";
import Tes2 from "./pages/tes2.jsx";
import Tes3 from "./pages/tes3.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tes1" element={<Tes />} />
        <Route path="/result" element={<Result />} />
        <Route path="/info" element={<Information />} />
        <Route path="/tes2" element={<Tes2 />} />
        <Route path="/scan" element={<Tes3 />} />
      </Routes>
    </>
  );
}

export default App;
