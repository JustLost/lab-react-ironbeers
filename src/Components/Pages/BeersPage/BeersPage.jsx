import axios from "axios";
import "./BeersPage.css"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";

function BeersPage() {
  const [getBeer, setGetBeer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        //console.log(response.data)
        setGetBeer(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Header></Header>
      <div className="box">
        <div className="singleBeer">
          <img src={getBeer.image_url} alt={getBeer.name} />
          <h2>{getBeer.name}</h2>
          <h4>{getBeer.tagline}</h4>
          <h6>{getBeer.first_brewed}</h6>
          <h6>{getBeer.attenuation_level}</h6>
          <p>{getBeer.description}</p>
          <h3>{getBeer.contributed_by}</h3>
        </div>
      </div>
    </>
  );
}

export default BeersPage;
