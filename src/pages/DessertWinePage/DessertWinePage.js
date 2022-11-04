import "./DessertWinePage.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import DessertWineList from "../../components/DessertWineList/DessertWineList";

const API_URL = "http://localhost:5050";

function DessertWinePage({ wineID }) {
  let [dessertWine, setDessertWine] = useState(undefined);

  const dessertWineList = () => {
    axios
      .get(`${API_URL}/dessert`)
      .then((res) => {
        setDessertWine(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dessertWineList();
  }, []);

  return (
    <div className="dessert-wine-page">
      <div className="dessert-wine-page__title-container">
        <h1 className="dessert-wine-page__title-container--title">DESSERT WINE LIST</h1>
      </div>
      {dessertWine && dessertWine.map((wine) => <DessertWineList wineId={wine.id} />)}
    </div>
  );
}

export default DessertWinePage;