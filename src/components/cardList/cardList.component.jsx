import React from "react";
import { SearchCard } from "../searchCard/searchCard.component";
import './cardList.styles.css';
export const CardList = ({ movieData, onNominate }) => {
  console.log("card component", movieData);

  return (
    <div>
      <div className="movie-card">
        {movieData.map((movie, index) => (
          <SearchCard key={index} movie={movie} onNominate={onNominate} />
        ))}
      </div>
    </div>
  );
};
