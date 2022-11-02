import "./styles/App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
