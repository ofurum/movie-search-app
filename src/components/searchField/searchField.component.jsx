import React from "react";
import "./searchField.style.css";
export const SearchBox = ({
  placeholder,
  handleChange,
  searchField,
  onEnter,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onEnter(e);
    }
  };
  return (
    <div className="search">
      <label htmlFor="search">
        <h5>Movie title</h5>
        <input
          type="search"
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          value={searchField}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
