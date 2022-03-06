import axios from 'axios';
import "./AllBeers.css"
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
//import Searchbar from '../../SearchBar/SearchBar';

function AllBeers() {

    const [getBeers, setGetBeers] = useState([]);

    //const [displayBeer, setDisplayBeer] = useState()
   

    // const searchFilter = (searchQuery) => {
    //   axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`);
    //   const filteredBeer = 
    // }

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
          <div className='box'>
            <div className='allBeers' key={beer._id}>
              {/* <Searchbar search = {searchFilter} /> */}
              <Link className = 'links' to = {`/${beer._id}`}>
                <div>
                  <img src={beer.image_url} alt="beer img" />
                </div>
                <div>
                  <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                  <h5> Created By: {beer.contributed_by}</h5>
                </div>
                
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AllBeers