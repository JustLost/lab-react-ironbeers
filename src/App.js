import './App.css';
import { Link, useParams } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import HomePage from './Components/Pages/HomePage/HomePage.jsx';
import BeersPage from './Components/Pages/BeersPage/BeersPage'
import NewBeerPage from './Components/Pages/NewBeerPage/NewBeerPage'
import AllBeers from './Components/Pages/AllBeers/AllBeers';
import RandomBeerPage from './Components/Pages/RandomBeerPage/RandomBeerPage';


import axios from 'axios';



function App() {
  return (

    <div className="App">
      <>        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newBeer" element={<NewBeerPage />} />
          <Route path="/beerPage" element={<BeersPage />} />
          <Route path="/randomBeer" element={<RandomBeerPage />} />
          <Route path="/allbeers" element={<AllBeers />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
