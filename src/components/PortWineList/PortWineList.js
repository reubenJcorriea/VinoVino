import "./PortWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5050";

export default function PortWineList({ wineId }) {
  let [portWineItem, setPortWineItem] = useState(null);

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
      <Link className="wine-list-link" to={`/discover/port/${portWineItem.id}`}>
        <div className="port-wine-list">
          <div className="port-wine-list__wine">
            <p className="port-wine-list__wine--name">
              Wine: <b>{portWineItem.wine}</b>
            </p>
          </div>
          <div className="port-wine-list__winery">
            <p className="port-wine-list__wine--name">
              Winery: <b>{portWineItem.winery}</b>
            </p>
          </div>
          <div className="port-wine-list__origin">
            <p className="port-wine-list__wine--name">
              Origin: <b>{portWineItem.location}</b>
            </p>
          </div>
        </div>
      </Link>
    )
  );
}
