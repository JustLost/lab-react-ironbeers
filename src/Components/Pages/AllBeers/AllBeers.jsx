import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';

function AllBeers() {

    const [getBeers, setGetBeers] = useState([]);

    useEffect(() => {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
          setGetBeers(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  return (
    <>
      <Header></Header>
      {getBeers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link className='links' to={`/allbeers/${beer._id}`}>
              <img src={beer.image_url} alt="beer img" />
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p> Created By: {beer.contributed_by}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default AllBeers