import "./App.css";
// ========================= Components ======================= //
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import UnKnownRoute from "./Components/UnKnownRoute/UnKnownRoute";

// ======================= react router ======================= //
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/UnKnownRoute" element={<UnKnownRoute />} />
          <Route
            path="*"
            exact={true}
            element={<Navigate to="/UnKnownRoute" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
