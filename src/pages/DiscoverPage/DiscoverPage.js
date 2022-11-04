import "./DiscoverPage.scss";

import React from "react";
import { useState } from "react";

const API_URL = "http://localhost:5050";

function HomePage() {

  let [wineType, setWineType] = useState(undefined);

  return (
    <div className="discover">
      <div className="discover__type-container">
        <div className="discover__type-container--red">
          <h2>RED</h2>
        </div>
        <div className="discover__type-container--white">
          <h2>WHITE</h2>
        </div>
        <div className="discover__type-container--sparkling">
          <h2>SPARKLING</h2>
        </div>
        <div className="discover__type-container--rose">
          <h2>ROSE</h2>
        </div>
        <div className="discover__type-container--dessert">
          <h2>DESSERT</h2>
        </div>
        <div className="discover__type-container--port">
          <h2>PORT</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
