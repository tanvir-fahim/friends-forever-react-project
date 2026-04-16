import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';



const Timeline = () => {

    const { timelineData } = useContext(FriendContext);
    console.log(timelineData);

    return (
        <div>
            {timelineData.map(data => <div>
                <h2>{data.name}</h2>
            </div>
            )}
        </div>
    );
};

export default Timeline;