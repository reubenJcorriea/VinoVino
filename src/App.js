import "./styles/App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import NavBar from "./components/NavBar/NavBar";
import RedWinePage from "./pages/RedWinePage/RedWinePage";
import WhiteWinePage from './pages/WhiteWinePage/WhiteWinePage.js';
import SparklingWinePage from './pages/SparklingWinePage/SparklingWinePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/discover/red" element={<RedWinePage />} />
          <Route path="/discover/white" element={<WhiteWinePage />} />
          <Route path="/discover/sparkling" element={<SparklingWinePage />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
