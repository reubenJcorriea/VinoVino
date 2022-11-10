import "./WineDetails.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TitleText from "../TitleText/TitleText";

const API_URL = "http://localhost:5050";

function WineDetails() {
  const [selectedWine, setSelectedWine] = useState(null);

  const { id } = useParams();

  function getWineDetails() {
    axios
    .get(`${API_URL}/wines/${id}`)

    .then((response) => {
      setSelectedWine(response.data[0]);
    })

    .catch((error) => {
      console.log(error);
    });
  }

  function eventHandler(e)  {
    //button clicked
    // sends patch request which includes the body to backend
    // put it in a "then" so the function runs when the patch request comes back
    const body = { favourite: !selectedWine.favourite}

    console.log(body);
    axios.patch(`${API_URL}/wines/${id}`, body, {
      
    })
    .then(() => selectedWine.favourite = false)
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getWineDetails()
  }, []);

  if (!selectedWine) {
    return null;
  }

  return (
    <>
      <div className="wine-details">
        < TitleText/>
        <div className="wine-details__container">
          <div className="wine-details__container--name">
            <h2>{selectedWine.wine}</h2>
          </div>
          <div className="wine-details__container--winery">
            <h3>{selectedWine.winery}</h3>
          </div>
          <div className="wine-details__container--location">
            <h3>{selectedWine.location}</h3>
          </div>
          <div className="wine-details__container--rating">
            <h3>{selectedWine.rating} · 5</h3>
          </div>
          <div className="wine-details__container--pairing">
            <p>{selectedWine.pairing}</p>
          </div>
        </div>
        <div className="favourite-container">
          <button className="favourite-container__button" onClick={eventHandler}>{ selectedWine.favourite ? "ADD TO FAVOURITES?" : "FAVOURITED!" }</button>
        </div>
        
      </div>
    </>
  );
}

export default WineDetails;
