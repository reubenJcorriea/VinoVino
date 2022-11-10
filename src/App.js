import "./styles/App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import NavBar from "./components/NavBar/NavBar";
import RedWinePage from "./pages/RedWinePage/RedWinePage";
import WhiteWinePage from "./pages/WhiteWinePage/WhiteWinePage.js";
import SparklingWinePage from "./pages/SparklingWinePage/SparklingWinePage";
import RoseWinePage from "./pages/RoseWinePage/RoseWinePage";
import DessertWinePage from "./pages/DessertWinePage/DessertWinePage";
import PortWinePage from "./pages/PortWinePage/PortWinePage";
import WineDetails from "./components/WineDetails/WineDetails";
import SearchDetails from "./components/SearchDetails/SearchDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/:id" element={<WineDetails />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />

          <Route path="/discover/red" element={<RedWinePage />} />
          <Route path="/discover/white" element={<WhiteWinePage />} />
          <Route path="/discover/sparkling" element={<SparklingWinePage />} />
          <Route path="/discover/rose" element={<RoseWinePage />} />
          <Route path="/discover/dessert" element={<DessertWinePage />} />
          <Route path="/discover/port" element={<PortWinePage />} />

          <Route path="/discover/red/:id" element={<WineDetails />} />
          <Route path="/discover/white/:id" element={<WineDetails />} />
          <Route path="/discover/sparkling/:id" element={<WineDetails />} />
          <Route path="/discover/rose/:id" element={<WineDetails />} />
          <Route path="/discover/dessert/:id" element={<WineDetails />} />
          <Route path="/discover/port/:id" element={<WineDetails />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
