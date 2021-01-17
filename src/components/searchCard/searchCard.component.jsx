import React, { useState } from "react";
import './searchCard.style.css'


export const SearchCard = ({movie, onNominate}) => {
  const [isVisible, setVisibility]= useState(false)
  return (
    <div>
      <div
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
        className="eachCardBackGround shadow"
        style={{ backgroundImage: `url(${movie.Poster})` }}
      >
        <div className="button">
          <div className="icon">
            <i
              hidden={!isVisible}
              class="fas fa-plus fa-2x"
              onClick={() => onNominate(movie)}
            ></i>
          </div>
        </div>
      </div>
      <div class="movie-label">
        <div className="movie-title">{movie.Title}</div>
        <div class="movie-year">{movie.Year}</div>
      </div>
    </div>
  );
};
