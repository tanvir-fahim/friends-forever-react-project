import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({children}) => {

    const [timelineData, setTimelineData] = useState([]);
    console.log(timelineData);

    const handleCall = (currentFriend) => {
        // console.log(currentFriend);
        toast.success(`Called ${currentFriend.name}`);
        setTimelineData([...timelineData , currentFriend]);
    }

    const handleText = (currentFriend) => {
        // console.log(currentFriend);
        toast.success(`Texted ${currentFriend.name}`);
        setTimelineData([...timelineData , currentFriend]);
    }

    const handleVideo = (currentFriend) => {
        // console.log(currentFriend);
        toast.success(`Video Called ${currentFriend.name}`);
        setTimelineData([...timelineData , currentFriend]);
    }

    const data = {
        timelineData,
        setTimelineData,
        handleCall,
        handleText,
        handleVideo
    }

    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;