import { Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./pages/landing.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
