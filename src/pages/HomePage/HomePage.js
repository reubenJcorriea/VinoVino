import "./HomePage.scss";

import React from "react";
import { useState } from "react";

import TitleText from "../../components/TitleText/TitleText";

function HomePage() {
  
  const [query, setQuery] = useState("");

  return (
    <div className="home">
      <div className="home__title">
        <TitleText />
      </div>
      <div className="home__search">
        <input
          className="home__search--input"
          placeholder="Search..."
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
    </div>
  );
}

export default HomePage;
