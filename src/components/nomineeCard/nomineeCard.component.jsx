import React from "react";

export const NomineeCard = ({ nominations }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <h3>Nomination</h3>
        <ul>
          {nominations.map((nomination) => (
            <li>{nomination.Title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
