import "./RoseWinePage.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import RoseWineList from "../../components/RoseWineList/RoseWineList";

const API_URL = "http://localhost:5050";

function RoseWinePage({ wineID }) {
  let [roseWine, setRoseWine] = useState(undefined);

  const roseWineList = () => {
    axios
      .get(`${API_URL}/rose`)
      .then((res) => {
        setRoseWine(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    roseWineList();
  }, []);

  return (
    <div className="rose-wine-page">
      <div className="rose-wine-page__title-container">
        <h1 className="rose-wine-page__title-container--title">ROSE WINE LIST</h1>
      </div>
      {roseWine && roseWine.map((wine) => <RoseWineList wineId={wine.id} key={wine.id}/>)}
    </div>
  );
}

export default RoseWinePage;