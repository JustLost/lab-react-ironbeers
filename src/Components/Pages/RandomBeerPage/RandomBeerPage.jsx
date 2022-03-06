import axios from "axios";
import "./RandomBeerPage.css"
import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";

function RandomBeerPage() {

  const [getRandomBeer, setGetRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setGetRandomBeer(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <div className="box">
        <div className="random">
          <img src={getRandomBeer.image_url} alt={getRandomBeer.name} />
          <div>
            <h2>{getRandomBeer.name}</h2>
            <h2>{getRandomBeer.tagline}</h2>
          </div>
          <div>
            <h4>{getRandomBeer.first_brewed}</h4>
            <h4>{getRandomBeer.attenuation_level}</h4>
          </div>
          <p>{getRandomBeer.description}</p>
          <h5>{getRandomBeer.contributed_by}</h5>
        </div>
      </div>
    </>
  );
}

export default RandomBeerPage;
