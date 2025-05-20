import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {

    const roommate = useLoaderData();
    console.log(roommate);


    return (
        <div>
            <h1>{roommate.userName}</h1>
        </div>
    );
};

export default Details;