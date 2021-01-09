import React from 'react';
import { SearchCard } from '../searchCard/searchCard.component';
import { NomineeCard } from '../nomineeCard/nomineeCard.component';

 export const CardList = () => {
    return (
        <div className = "card-section">
            <SearchCard />
            <NomineeCard />
        </div>
    )
}