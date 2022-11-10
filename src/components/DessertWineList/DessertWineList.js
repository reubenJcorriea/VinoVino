import "./DessertWineList.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5050";

export default function DessertWineList({ wineId }) {
  let [dessertWineItem, setDessertWineItem] = useState(null);

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
      <Link className="wine-list-link" to={`/discover/dessert/${dessertWineItem.id}`}>
        <div className="dessert-wine-list">
          <div className="dessert-wine-list__wine">
            <p className="dessert-wine-list__wine--name">
              Wine: <b>{dessertWineItem.wine}</b>
            </p>
          </div>
          <div className="dessert-wine-list__winery">
            <p className="dessert-wine-list__wine--name">
              Winery: <b>{dessertWineItem.winery}</b>
            </p>
          </div>
          <div className="dessert-wine-list__origin">
            <p className="dessert-wine-list__wine--name">
              Origin: <b>{dessertWineItem.location}</b>
            </p>
          </div>
        </div>
      </Link>
    )
  );
}
