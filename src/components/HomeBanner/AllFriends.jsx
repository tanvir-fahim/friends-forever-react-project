import React, { use } from 'react';
import { NavLink } from 'react-router';

const AllFriends = ({ friendsPromise }) => {

    const friends = use(friendsPromise);

    return (
        <div className='container mx-auto px-4 md:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10'>
                {
                    friends.map(friend => <NavLink to={`/friendDetails/${friend.id}`} key={friend.id} className="card bg-white shadow-md border border-gray-100 rounded-xl p-6">
                        <div className="flex justify-center mb-4">
                            <div className="avatar">
                                <div className="w-24 rounded-full  border border-blue-600">
                                    <img src={friend.image} alt={friend.name} />
                                </div>
                            </div>
                        </div>

                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold text-slate-800">{friend.name}</h2>

                            <p className="text-gray-400 text-sm font-medium">
                                {friend.days_since_contact}d ago
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 pt-1">
                                {friend.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="badge border-none bg-emerald-100 text-emerald-700 font-semibold px-4 py-3 uppercase text-[10px] tracking-wider"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-2">
                                <p className={`px-4 py-1 text-sm rounded-full text-white w-fit mx-auto 
                                        ${friend.status === 'Overdue'
                                        ? 'bg-red-500'
                                        : friend.status === 'Almost Due'
                                            ? 'bg-amber-500'
                                            : 'bg-[#244D3F]'
                                    }`}
                                >
                                    {friend.status}
                                </p>
                            </div>
                        </div>
                    </NavLink>)
                }
            </div>

        </div>
    );
};

export default AllFriends;