import React from "react";
import { useState } from 'react';
import style from "./search.module.css"
// import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = (event) => {
      event.preventDefault();
      console.log(searchTerm);
      // Aquí se puede realizar acción de búsqueda con el término ingresado(??)
    };
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSearch(event);
      }
    };
  
    return (
      <div className={style.searchContainer}>
        <form>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {/* <button type="button" onClick={handleSearch}>
          <AiOutlineSearch/>
          </button> */}
        </form>
      </div>
    );
  }
  

export default Search;




