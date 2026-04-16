import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {

    const [timelineData, setTimelineData] = useState([]);
    // console.log(timelineData);

    const handleCall = (currentFriend) => {
        // console.log(currentFriend);
        toast.success(`Called ${currentFriend.name}`);
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        const newActivity = {
            ...currentFriend,
            type: 'Called',
            date: formattedDate
        };

        setTimelineData([...timelineData, newActivity]);
    }

    const handleText = (currentFriend) => {
        // console.log(currentFriend);
        toast.success(`Texted ${currentFriend.name}`);

        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        const newActivity = {
            ...currentFriend,
            type: 'Texted',
            date: formattedDate
        };

        setTimelineData([...timelineData, newActivity]);
    }

    const handleVideo = (currentFriend) => {
        // console.log(currentFriend);
        toast.success(`Video Called ${currentFriend.name}`);

        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        const newActivity = {
            ...currentFriend,
            type: 'Video Called',
            date: formattedDate
        };

        setTimelineData([...timelineData, newActivity]);
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