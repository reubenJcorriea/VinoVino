import "./DiscoverPage.scss";

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5050";

function HomePage() {
  let [wineType, setWineType] = useState(undefined);

  return (
    <div className="discover">
      <div className="discover__type-container">
        <Link className="link-to-type"  to="/discover/red">
          <div className="discover__type-container--red">
            <h2>RED</h2>
          </div>
        </Link>
        <Link className="link-to-type" to="/discover/white">
          <div className="discover__type-container--white">
            <h2>WHITE</h2>
          </div>
        </Link>
        <Link className="link-to-type" to="/discover/sparkling">
          <div className="discover__type-container--sparkling">
            <h2>SPARKLING</h2>
          </div>
        </Link>
        <Link className="link-to-type" to="/discover/rose">
          <div className="discover__type-container--rose">
            <h2>ROSE</h2>
          </div>
        </Link>
        <Link className="link-to-type" to="/discover/dessert">
          <div className="discover__type-container--dessert">
            <h2>DESSERT</h2>
          </div>
        </Link>
        <Link className="link-to-type" to="/discover/port">
          <div className="discover__type-container--port">
            <h2>PORT</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
