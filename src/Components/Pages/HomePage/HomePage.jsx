import React from 'react'
import { Link } from "react-router-dom";
import "./HomePage.css"

import BeerImage from "../../../assets/beers.png"
import RandomImage from "../../../assets/random-beer.png"
import NewBeerImage from "../../../assets/new-beer.png"

function HomePage() {
  return (
    <div className="home">
      <Link className="links" to="/allbeers">
        <img src={BeerImage} alt="beers" />
        <h2>All Beers</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea velit
          atque omnis maxime fuga error minima, reiciendis magnam enim sequi!
          Hic ratione molestiae neque esse ea animi, commodi reiciendis.
        </p>
      </Link>
      <Link className="links" to="/randomBeer">
        <img src={RandomImage} alt="random" />
        <h2>Random Beer</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea velit
          atque omnis maxime fuga error minima, reiciendis magnam enim sequi!
          Hic ratione molestiae neque esse ea animi, commodi reiciendis.
        </p>
      </Link>
      <Link className="links" to="/newBeer">
        <img src={NewBeerImage} alt="new" />
        <h2>New Beer</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea velit
          atque omnis maxime fuga error minima, reiciendis magnam enim sequi!
          Hic ratione molestiae neque esse ea animi, commodi reiciendis.
        </p>
      </Link>
    </div>
  );
}

export default HomePage