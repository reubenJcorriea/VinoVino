import "./WhiteWinePage.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import WhiteWineList from "../../components/WhiteWineList/WhiteWineList";

const API_URL = "http://localhost:5050";

function WhiteWinePage({ wineID }) {
  let [whiteWine, setWhiteWine] = useState(undefined);

  const whiteWineList = () => {
    axios
      .get(`${API_URL}/white`)
      .then((res) => {
        setWhiteWine(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    whiteWineList();
  }, []);

  return (
    <div className="white-wine-page">
      <div className="white-wine-page__title-container">
        <h1 className="white-wine-page__title-container--title">WHITE WINE LIST</h1>
      </div>
      {whiteWine && whiteWine.map((wine) => <WhiteWineList wineId={wine.id} key={wine.id} />)}
    </div>
  );
}

export default WhiteWinePage;