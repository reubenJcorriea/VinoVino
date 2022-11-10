import "./PortWinePage.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import PortWineList from "../../components/PortWineList/PortWineList";

const API_URL = "http://localhost:5050";

function PortWinePage({ wineID }) {
  let [portWine, setPortWine] = useState(undefined);

  const portWineList = () => {
    axios
      .get(`${API_URL}/port`)
      .then((res) => {
        setPortWine(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    portWineList();
  }, []);

  return (
    <div className="port-wine-page">
      <div className="port-wine-page__title-container">
        <h1 className="port-wine-page__title-container--title">PORT WINE LIST</h1>
      </div>
      {portWine && portWine.map((wine) => <PortWineList wineId={wine.id} key={wine.id}/>)}
    </div>
  );
}

export default PortWinePage;