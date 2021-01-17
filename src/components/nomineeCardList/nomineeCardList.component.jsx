import React from 'react';
import "./nominatedNames.styles.css"

export const NomineeCardList = ({ nomination, onDelete }) =>{
    return (
      <div>
        <ul>
          <li>
            {nomination.Title}
              <i class="fas fa-trash-alt fa-1x" onClick={() => onDelete()}></i> 
          </li>
        </ul>
      </div>
    );
}