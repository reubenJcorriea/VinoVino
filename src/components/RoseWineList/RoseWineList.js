import "./RoseWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5050";

export default function RoseWineList({ wineId }) {
  let [roseWineItem, setRoseWineItem] = useState(undefined);

  const roseWineData = () => {
    axios
      .get(`${API_URL}/rose/${wineId}`)
      .then((response) => {
        setRoseWineItem(response.data[0]);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    roseWineData();
  }, []);

  return (
    !!roseWineItem && (
      <div className="rose-wine-list">
        <div className="rose-wine-list__wine">
          <p className="rose-wine-list__wine--name">WINE: {roseWineItem.wine}</p>
        </div>
        <div className="rose-wine-list__winery">
          <p className="rose-wine-list__wine--name">WINERY: {roseWineItem.winery}</p>
        </div>
      </div>
    )
  );
}