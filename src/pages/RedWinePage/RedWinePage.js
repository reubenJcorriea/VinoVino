import "./RedWinePage.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import RedWineList from "../../components/RedWineList/RedWineList";

const API_URL = "http://localhost:5050";

function RedWinePage({ wineID }) {
  let [redWine, setRedWine] = useState(undefined);

  const redWineList = () => {
    axios
      .get(`${API_URL}/red`)
      .then((res) => {
        setRedWine(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    redWineList();
  }, []);

  return (
    <div className="red-wine-page">
      <div className="red-wine-page__title-container">
        <h1 className="red-wine-page__title-container--title">RED WINE LIST</h1>
      </div>
      {redWine && redWine.map((wine) => <RedWineList wineId={wine.id} />)}
    </div>
  );
}

export default RedWinePage;
