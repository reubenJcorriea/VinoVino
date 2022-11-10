import "./SearchDetails.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5050";

function SearchDetails(props) {
  const [searchedWine, setSearchedWine] = useState(null);
  
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/wines/${id}`)

      .then((response) => {
        setSearchedWine(response.data[0]);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!searchedWine) {
    return null;
  }

  return (
    <>
      <div className="search-details">
        <h2>{searchedWine.wine}</h2>
      </div>
    </>
  );
}

export default SearchDetails;
