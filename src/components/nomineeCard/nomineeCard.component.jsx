import React from "react";
import {NomineeCardList} from "../nomineeCardList/nomineeCardList.component"

export const NomineeCard = ({ nominations, unnominate }) => {

  return (
    <div>
      <div>
        <div>
            <div>
               {nominations.map((nomination,index, id)=>{
                 return (
                   <div>
                     <NomineeCardList
                       onDelete={() => unnominate(id)}
                       key={index}
                       nomination={nomination}
                     />
                   </div>
                 );
               })}
              </div>
        </div>
      </div>
    </div>
  );
};
