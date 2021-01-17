import React from "react";
import "./searchField.style.css";
export const SearchBox = ({
  placeholder,
  handleChange,
  searchField,
  onSubmit,
}) => {
   const handleSubmit = (e) => {
     e.preventDefault();
     onSubmit(e);
   };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            type="search"
            // onKeyDown={handleKeyDown}
            placeholder={placeholder}
            value={searchField}
            onChange={handleChange}
            className="search-length"
          />
          <button
            type="button"
            className="btn btn-success"
            style={{marginLeft: '10px'}}
          >
            search
          </button>
        </label>
      </form>
    </div>
  );
};
