import React from 'react';
import { useLoaderData } from 'react-router';

const BrowseListings = () => {

    const allRoommate = useLoaderData();
    console.log(allRoommate);



    return (
        <div>
            <h1>{allRoommate.userName} </h1>
        </div>
    );
};

export default BrowseListings;