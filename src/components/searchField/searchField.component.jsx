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
        <input
          type="search"
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          value={searchField}
          onChange={handleChange}
          className="search-length"
        />
      </label>
    </div>
  );
};
