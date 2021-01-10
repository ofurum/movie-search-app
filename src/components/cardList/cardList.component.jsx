import React from 'react';
import { SearchCard } from '../searchCard/searchCard.component';
import { NomineeCard } from '../nomineeCard/nomineeCard.component';

 export const CardList = (props) => {
   console.log(props.listofMovies);
    return (
      <div className="card-section">
        {props.listofMovies.map((movie) => (
           <SearchCard key = {movie.id} movie = {movie.Title} />
        ))}

        <NomineeCard /> 
      </div>
    );
    
}