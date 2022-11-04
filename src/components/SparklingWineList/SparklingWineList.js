import "./SparklingWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5050";

export default function SparklingWineList({ wineId }) {
  let [sparklingWineItem, setSparklingWineItem] = useState(undefined);

  const sparklingWineData = () => {
    axios
      .get(`${API_URL}/sparkling/${wineId}`)
      .then((response) => {
        setSparklingWineItem(response.data[0]);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    sparklingWineData();
  }, []);

  return (
    !!sparklingWineItem && (
      <div className="sparkling-wine-list">
        <div className="sparkling-wine-list__wine">
          <p className="sparkling-wine-list__wine--name">WINE: {sparklingWineItem.wine}</p>
        </div>
        <div className="sparkling-wine-list__winery">
          <p className="sparkling-wine-list__wine--name">WINERY: {sparklingWineItem.winery}</p>
        </div>
      </div>
    )
  );
}
