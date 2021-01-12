import React from 'react';
import { SearchCard } from '../searchCard/searchCard.component';

 export const CardList = ({ movieData }) => {
   console.log('card component',movieData);
   
    return (
      <div>
        <div>
          <SearchCard movies={movieData} />
        </div>
      </div>
    );
    
}