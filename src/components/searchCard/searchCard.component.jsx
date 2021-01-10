import React from 'react';

export const SearchCard = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div>{props.movie}</div>
      </div>
    </div>
  );
};