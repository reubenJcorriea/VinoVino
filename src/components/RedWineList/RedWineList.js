import "./RedWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const API_URL = "http://localhost:5050";

function RedWineList({ wineId }) {
  let [redWineItem, setRedWineItem] = useState(null);

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
    redWineItem && (
      <Link className="wine-list-link" to={`/discover/red/${redWineItem.id}`}>
        <div className="red-wine-list">
          <div className="red-wine-list__wine">
            <p className="red-wine-list__wine--name">
              Wine: <b>{redWineItem.wine}</b>
            </p>
          </div>
          <div className="red-wine-list__winery">
            <p className="red-wine-list__wine--name">
              Winery: <b>{redWineItem.winery}</b>
            </p>
          </div>
          <div className="red-wine-list__origin">
            <p className="red-wine-list__wine--name">
              Origin: <b>{redWineItem.location}</b>
            </p>
          </div>
        </div>
      </Link>
    )
  );
}

export default RedWineList;
