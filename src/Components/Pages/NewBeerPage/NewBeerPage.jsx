import React, { useState } from "react";
import Header from "../../Header/Header";

function NewBeerPage(props) {

  const [name, setName ] = useState('');
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleNameImput = (e) => setName(e.target.value);
  const handleTaglineImput = (e) => setTagline(e.target.value);
  const handleDescriptionImput = (e) => setDescription(e.target.value);
  const handleFirst_brewedImput = (e) => setFirst_brewed(e.target.value);
  const handleBrewers_tipsImput = (e) => setBrewers_tips(e.target.value);
  const handleAttenuation_levelImput = (e) => setAttenuation_level(e.target.value);
  const handleContributed_byImput = (e) => setContributed_by(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = Math.random() * 1000000000;
    const newBeer = { _id: randomId, name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
  
    props.newBeerPage(newBeer);
    setName('');
    setTagline('');
    setDescription('');
    setFirst_brewed('');
    setBrewers_tips('');
    setAttenuation_level(0);
    setContributed_by('');
  };

  return (
    <>
      <Header></Header>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={handleNameImput} />
          <label>Tagline</label>
          <input type="text" name="tagline" value={tagline} onChange={handleTaglineImput}  />
          <label>Description</label>
          <input type="textarea" name="description" value={description} onChange={handleDescriptionImput}  />
          <label>First Brewed</label>
          <input type="text" name="first_brewed" value={first_brewed} onChange={handleFirst_brewedImput}  />
          <label>Brewers Tips</label>
          <input type="text" name="brewers_tips" value={brewers_tips} onChange={handleBrewers_tipsImput}  />
          <label>Attenuation Level</label>
          <input type="number" name="attenuation_level" value={attenuation_level} onChange={handleAttenuation_levelImput}  />
          <label>Contributed By</label>
          <input type="text" name="contributed_by" value={contributed_by} onChange={handleContributed_byImput}  />
        
          <button type="submit"> Add New </button>
        </form>
      </div>
    </>
  );
}

export default NewBeerPage;
