import React from 'react';

export const SearchCard = (props) => {
  return (
    <div>
      <div style={{ width: "18rem"}}>
        <img src={props.movies.Poster}  alt={'images'}/>
        <ul>
          <li>
            {props.movies.Title}
            <button type="button">Nominate</button>
            </li>
        </ul>
      
      </div>
    </div>
  );
};