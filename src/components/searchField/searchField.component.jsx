import React from 'react'
import './searchField.style.css'
export const SearchBox = ({placeholder, handleChange, searchField}) => {
  return (
    <div className="search">
      <label htmlFor = "search">
        <h5>Movie title</h5>
        <input 
        type="search" 
        placeholder= {placeholder}
        value = {searchField}
        onChange = {handleChange}
        />
      </label>
    </div>
  );
}