import React from 'react';
import { FaArchive, FaPhoneAlt, FaTrashAlt } from 'react-icons/fa';
import { FaBell, FaCommentDots, FaVideo } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {

    const getParams = useParams();
    // console.log(getParams);

    const friends = useLoaderData();
    // console.log(friends);

    const uniqueFriend = friends.find(friend => friend.id == getParams.uniqueID);
    console.log(uniqueFriend);
    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans text-slate-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

                <div className="md:col-span-4 space-y-4">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <img
                            src={uniqueFriend.image}
                            alt={uniqueFriend.name}
                            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mb-4"
                        />
                        <h2 className="text-2xl font-bold mb-2">{uniqueFriend.name}</h2>

                        <p className={`px-4 mb-2 py-1 text-sm rounded-full text-white w-fit mx-auto 
                                        ${uniqueFriend.status === 'Overdue'
                                        ? 'bg-red-500'
                                        : uniqueFriend.status === 'Almost Due'
                                            ? 'bg-amber-500'
                                            : 'bg-[#244D3F]'
                                    }`}
                                >
                                    {uniqueFriend.status}
                                </p>

                        <div className="flex gap-2 mb-4">
                            {uniqueFriend.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium">
                                    {tag.toUpperCase()}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-500 italic text-sm mb-2 px-4 leading-relaxed">
                            "{uniqueFriend.bio}"
                        </p>
                        <p className="text-gray-400 text-xs">Preferred: {uniqueFriend.email}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                            <FaBell className="text-slate-600" /> Snooze 2 Weeks
                        </button>
                        <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                            <FaArchive className="text-slate-600" /> Archive
                        </button>
                        <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-100 rounded-lg text-red-500 hover:bg-red-50 transition-colors font-semibold">
                            <FaTrashAlt /> Delete
                        </button>
                    </div>
                </div>

                <div className="md:col-span-8 space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <div className="text-4xl font-bold text-slate-700 mb-1">{uniqueFriend.days_since_contact}</div>
                            <div className="text-gray-400 text-sm">Days Since Contact</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <div className="text-4xl font-bold text-slate-700 mb-1">{uniqueFriend.goal}</div>
                            <div className="text-gray-400 text-sm">Goal (Days)</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <div className="text-2xl font-bold text-slate-700 mb-1 mt-2">
                                {new Date(uniqueFriend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>
                            <div className="text-gray-400 text-sm">Next Due</div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-emerald-900">Relationship Goal</h3>
                            <button className="px-4 py-1 bg-gray-50 border border-gray-200 rounded text-sm font-medium hover:bg-gray-100">Edit</button>
                        </div>
                        <p className="text-slate-600">
                            Connect every <span className="font-bold">{uniqueFriend.goal} days</span>
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-emerald-900 mb-6">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="flex flex-col items-center justify-center gap-2 p-6 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all group">
                                <FaPhoneAlt className="text-slate-600 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">Call</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-6 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all group">
                                <FaCommentDots size={20} className="text-slate-600 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">Text</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-6 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all group">
                                <FaVideo size={20} className="text-slate-600 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;