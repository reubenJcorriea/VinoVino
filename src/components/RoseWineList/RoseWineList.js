import "./RoseWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5050";

export default function RoseWineList({ wineId }) {
  let [roseWineItem, setRoseWineItem] = useState(null);

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
      <Link className="wine-list-link" to={`/discover/rose/${roseWineItem.id}`}>
        <div className="rose-wine-list">
          <div className="rose-wine-list__wine">
            <p className="rose-wine-list__wine--name">
              Wine: <b>{roseWineItem.wine}</b>
            </p>
          </div>
          <div className="rose-wine-list__winery">
            <p className="rose-wine-list__wine--name">
              Winery: <b>{roseWineItem.winery}</b>
            </p>
          </div>
          <div className="rose-wine-list__origin">
            <p className="rose-wine-list__wine--name">
              Origin: <b>{roseWineItem.location}</b>
            </p>
          </div>
        </div>
      </Link>
    )
  );
}
