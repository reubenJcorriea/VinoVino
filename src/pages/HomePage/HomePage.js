import "./HomePage.scss";

import React, { useEffect, useState, useCallback } from "react";
import Fuse from "fuse.js";
import axios from "axios";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";

import TitleText from "../../components/TitleText/TitleText";

const API_URL = "http://localhost:5050";

const options = {
  

  keys: ["pairing"],
};

function HomePage() {
  const [wines, setWines] = useState([]);
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/wines`).then((response) => {
      setWines(response.data);
    });
  }, []);

  const getSearch = useCallback(debounce((text) => {
      const fuse = new Fuse(wines, options);
      const results = fuse.search(text);
      console.log(text);
      setResults(results);
    }, 500), [wines] );


  return (
    <div className="home">
      <div className="home__title">
        <TitleText />
      </div>
      <div className="home__search">
        <input
          className="home__search--input"
          placeholder="Search..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            getSearch(e.target.value);
          }}
        />
      </div>
      <div className="search-results">
        {results &&
          results.slice(0, 10).map(({ item }) => (
            <Link className="search-link" to={`/${item.id}`}>
              <div className="search-results__container">
                <b className="search-results__container--name" key={item.id}>
                  {item.wine}
                </b>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default HomePage;
