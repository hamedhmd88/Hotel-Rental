import { useState } from "react";
import "./searchBar.scss";


const types = ["buy", "rent"];

export default function SearchBar() {

const [query, setQuery] = useState({
  type: "buy",
  location: "",
  minPrice: "",
  maxprice: "",
});

const handelSwich = (e) => {
  setQuery((prev) => (
    {
      ...prev,
      type: e,
    }
  ))
}
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (

          <button 
          key={type} 
          onClick={() => handelSwich(type)}
          className={query.type === type ? "active" : null}>
          {type}
          </button>

        ))}
      </div>

      <form>
        <input type="text" name="location" placeholder="City Location"/>
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/public/search.png" alt="Search Icon"></img>
        </button>
      </form>
    </div>
  )
}
