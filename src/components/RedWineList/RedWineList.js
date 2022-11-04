import "./RedWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5050";

export default function RedWineList({ wineId }) {
  let [redWineItem, setRedWineItem] = useState(undefined);

  const redWineData = () => {
    axios
      .get(`${API_URL}/red/${wineId}`)
      .then((response) => {
        setRedWineItem(response.data[0]);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    redWineData();
  }, []);

  return (
    !!redWineItem && (
      <div className="red-wine-list">
        <div className="red-wine-list__wine">
          <p className="red-wine-list__wine--name">WINE: {redWineItem.wine}</p>
        </div>
        <div className="red-wine-list__winery">
          <p className="red-wine-list__wine--name">WINERY: {redWineItem.winery}</p>
        </div>
      </div>
    )
  );
}
