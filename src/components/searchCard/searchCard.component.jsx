import React from "react";

export const SearchCard = (props) => {
  return (
    <div>
      <div style={{ width: "18rem" }}>
        <img src={props.movie.Poster} alt={"images"} />
        <ul>
          <li>
            {props.movie.Title}
            <button onClick={() => props.onNominate(props.movie)} type="button">
              Nominate
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
