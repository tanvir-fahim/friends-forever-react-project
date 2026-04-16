import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';
import { MdAddIcCall } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import { IoVideocamOutline } from 'react-icons/io5';



const Timeline = () => {

    const { timelineData } = useContext(FriendContext);
    console.log(timelineData);

    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold p-4'>Timeline</h2>

            {timelineData && timelineData.length > 0 ? (
                <div className="p-8 space-y-2">
                    {timelineData.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 p-4 border-2  border-blue-200 rounded-sm bg-white"
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
                <div className="flex flex-col items-center justify-center min-h-75 p-8 mt-4 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
                    <div className="w-12 h-12 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-2xl">📅</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900">No activities yet</h3>
                    <p className="text-gray-500 text-center max-w-3/4">
                        Contact your friends and strengthen the bond.
                    </p>
                </div>
            )}
        </div>
    )
};

export default Timeline;