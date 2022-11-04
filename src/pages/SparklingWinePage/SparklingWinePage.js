import "./SparklingWinePage.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import SparklingWineList from "../../components/SparklingWineList/SparklingWineList";

const API_URL = "http://localhost:5050";

function SparklingWinePage({ wineID }) {
  let [sparklingWine, setSparklingWine] = useState(undefined);

  const sparklingWineList = () => {
    axios
      .get(`${API_URL}/sparkling`)
      .then((res) => {
        setSparklingWine(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    sparklingWineList();
  }, []);

  return (
    <div className="sparkling-wine-page">
      <div className="sparkling-wine-page__title-container">
        <h1 className="sparkling-wine-page__title-container--title">SPARKLING WINE LIST</h1>
      </div>
      {sparklingWine && sparklingWine.map((wine) => <SparklingWineList wineId={wine.id} />)}
    </div>
  );
}

export default SparklingWinePage;