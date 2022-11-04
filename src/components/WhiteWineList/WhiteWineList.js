import "./WhiteWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5050";

export default function WhiteWineList({ wineId }) {
  let [whiteWineItem, setwhiteWineItem] = useState(undefined);

  const whiteWineData = () => {
    axios
      .get(`${API_URL}/white/${wineId}`)
      .then((response) => {
        setwhiteWineItem(response.data[0]);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    whiteWineData();
  }, []);

  return (
    !!whiteWineItem && (
      <div className="white-wine-list">
        <div className="white-wine-list__wine">
          <p className="white-wine-list__wine--name">WINE: {whiteWineItem.wine}</p>
        </div>
        <div className="white-wine-list__winery">
          <p className="white-wine-list__wine--name">WINERY: {whiteWineItem.winery}</p>
        </div>
      </div>
    )
  );
}