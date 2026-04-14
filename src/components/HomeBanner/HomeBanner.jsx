import React from 'react';

const HomeBanner = () => {
    const stats = [
        { label: 'Total Friends', value: 10 },
        { label: 'On Track', value: 3 },
        { label: 'Need Attention', value: 6 },
        { label: 'Interactions This Month', value: 12 },
    ];

    return (
        <section className="w-full pt-30 pb-10 px-4">
            <div className="container mx-auto items-center">

                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-[#1e293b] mb-4">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-[#64748b] text-lg max-w-2xl mx-auto leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                </div>

                <button className="bg-[#244D3F] hover:bg-[#233a31] text-white px-6 py-2.5 rounded-md flex items-center gap-2 mx-auto  mb-10 ">
                    <span className="text-xl">+</span> Add a Friend
                </button>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm flex flex-col items-center justify-center min-h-40"
                        >
                            <span className="text-3xl font-bold text-[#1e293b] mb-2">
                                {stat.value}
                            </span>
                            <span className="text-gray-500 text-sm">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>


                <div className="w-full border-t border-gray-200 mt-10"></div>
            </div>
        </section>
    );
};

export default HomeBanner;