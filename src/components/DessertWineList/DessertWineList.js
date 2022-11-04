import "./DessertWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5050";

export default function DessertWineList({ wineId }) {
  let [dessertWineItem, setDessertWineItem] = useState(undefined);

  const dessertWineData = () => {
    axios
      .get(`${API_URL}/dessert/${wineId}`)
      .then((response) => {
        setDessertWineItem(response.data[0]);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    dessertWineData();
  }, []);

  return (
    !!dessertWineItem && (
      <div className="dessert-wine-list">
        <div className="dessert-wine-list__wine">
          <p className="dessert-wine-list__wine--name">WINE: {dessertWineItem.wine}</p>
        </div>
        <div className="dessert-wine-list__winery">
          <p className="dessert-wine-list__wine--name">
            WINERY: {dessertWineItem.winery}
          </p>
        </div>
      </div>
    )
  );
}
