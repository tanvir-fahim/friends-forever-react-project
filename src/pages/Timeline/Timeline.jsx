import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendContext';
import { MdAddIcCall } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import { IoVideocamOutline } from 'react-icons/io5';
import { FaHistory } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';



const Timeline = () => {

    const { timelineData } = useContext(FriendContext);
    // console.log(timelineData);

    const [filter, setFilter] = useState('All');

    const filteredTimelineData = timelineData?.filter(item => {
        return filter === 'All' ? true : item.type === filter;
    });

    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold p-4'>Timeline</h2>
            <div className="dropdown dropdown-bottom p-4">
                <div tabIndex={0} role="button" className="btn m-1">
                    {filter === 'All' ? 'Sort Timeline by' : `By ${filter}`} <IoMdArrowDropdown />
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => { setFilter('All'); document.activeElement.blur(); }}>All</a></li>
                    <li><a onClick={() => { setFilter('Called'); document.activeElement.blur(); }}>Called</a></li>
                    <li><a onClick={() => { setFilter('Texted'); document.activeElement.blur(); }}>Texted</a></li>
                    <li><a onClick={() => { setFilter('Video Called'); document.activeElement.blur(); }}>Video Called</a></li>
                </ul>
            </div>

            {filteredTimelineData && filteredTimelineData.length > 0 ? (
                <div className="p-8 space-y-2">
                    {filteredTimelineData.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-4 border-2  border-blue-200 rounded-lg bg-white"
                        >

                            <div className="text-3xl">
                                {item.type === 'Called' ? (
                                    <MdAddIcCall />
                                ) : item.type === 'Texted' ? (
                                    <TiMessages />
                                ) : (
                                    <IoVideocamOutline />
                                )}
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-baseline gap-1">
                                    <span className="font-bold text-slate-700">{item.type}</span>
                                    <span className='text-sm text-slate-700'>with</span>
                                    <span className="text-purple-950 font-semibold">{item.name}</span>
                                </div>
                                <span className="text-slate-500 text-sm">{item.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='container mx-auto px-10 mb-4'>
                    <div className="flex flex-col items-center justify-center min-h-75 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-100">
                        <div className="w-12 h-12 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                            <span className="text-2xl"><FaHistory /></span>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900">No activities yet</h3>
                        <p className="text-gray-500 text-center max-w-3/4">
                            Contact your friends and strengthen the bond.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Timeline;