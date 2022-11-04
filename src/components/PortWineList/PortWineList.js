import "./PortWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5050";

export default function PortWineList({ wineId }) {
  let [portWineItem, setPortWineItem] = useState(undefined);

  const portWineData = () => {
    axios
      .get(`${API_URL}/port/${wineId}`)
      .then((response) => {
        setPortWineItem(response.data[0]);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    portWineData();
  }, []);

  return (
    !!portWineItem && (
      <div className="port-wine-list">
        <div className="port-wine-list__wine">
          <p className="port-wine-list__wine--name">WINE: {portWineItem.wine}</p>
        </div>
        <div className="port-wine-list__winery">
          <p className="port-wine-list__wine--name">WINERY: {portWineItem.winery}</p>
        </div>
      </div>
    )
  );
}
