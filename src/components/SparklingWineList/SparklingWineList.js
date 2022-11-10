import "./SparklingWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5050";

export default function SparklingWineList({ wineId }) {
  let [sparklingWineItem, setSparklingWineItem] = useState(null);

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
      <Link className="wine-list-link" to={`/discover/sparkling/${sparklingWineItem.id}`}>
        <div className="sparkling-wine-list">
          <div className="sparkling-wine-list__wine">
            <p className="sparkling-wine-list__wine--name">
              Wine: <b>{sparklingWineItem.wine}</b>
            </p>
          </div>
          <div className="sparkling-wine-list__winery">
            <p className="sparkling-wine-list__wine--name">
              Winery: <b>{sparklingWineItem.winery}</b>
            </p>
          </div>
          <div className="sparkling-wine-list__origin">
            <p className="sparkling-wine-list__wine--name">
              Origin: <b>{sparklingWineItem.location}</b>
            </p>
          </div>
        </div>
      </Link>
    )
  );
}
