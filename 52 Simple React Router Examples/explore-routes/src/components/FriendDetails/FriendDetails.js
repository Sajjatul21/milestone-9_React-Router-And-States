import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>FriendDetails page</h1>
            <h2>Evetything you need to know about this person</h2>
        </div>
    );
};

export default FriendDetails;