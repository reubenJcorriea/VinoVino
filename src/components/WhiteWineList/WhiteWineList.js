import "./WhiteWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5050";

export default function WhiteWineList({ wineId }) {
  let [whiteWineItem, setwhiteWineItem] = useState(null);

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
      <Link className="wine-list-link" to={`/discover/white/${whiteWineItem.id}`}>
        <div className="white-wine-list">
          <div className="white-wine-list__wine">
            <p className="white-wine-list__wine--name">
              Wine: <b>{whiteWineItem.wine}</b>
            </p>
          </div>
          <div className="white-wine-list__winery">
            <p className="white-wine-list__wine--name">
              Winery: <b>{whiteWineItem.winery}</b>
            </p>
          </div>
          <div className="white-wine-list__origin">
            <p className="white-wine-list__wine--name">
              Origin: <b>{whiteWineItem.location}</b>
            </p>
          </div>
        </div>
      </Link>
    )
  );
}
