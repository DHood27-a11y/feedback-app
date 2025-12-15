import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddFeedback from "./pages/AddFeeback";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddFeedback" element={<AddFeedback />} />
      </Routes>
    </>
  );
}

export default App;
