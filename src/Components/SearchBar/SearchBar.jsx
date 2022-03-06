import React, { useState } from "react";

function Searchbar(props) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    props.search(e.target.value);
  };

  return (
    <div>
      <h4>Search for Beer:</h4>
      <input type="text" value={search} onChange={handleChange} />
    </div>
  );
}

export default Searchbar;
