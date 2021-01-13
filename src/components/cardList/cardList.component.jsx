import React from "react";
import { SearchCard } from "../searchCard/searchCard.component";

// Why is card list a component, it looks redundant
export const CardList = ({ movieData, onNominate }) => {
  console.log("card component", movieData);

  return (
    <div>
      <div>
        <SearchCard onNominate={onNominate} movie={movieData} />
      </div>
    </div>
  );
};
