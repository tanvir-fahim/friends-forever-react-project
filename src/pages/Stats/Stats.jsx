import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';
import { MdOutlineDataUsage } from 'react-icons/md';
import { Pie, PieChart, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {
    const { timelineData } = useContext(FriendContext);

    const chartDataMap = timelineData.reduce((acc, item) => {
        const type = item.type || 'Other';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    const dataForChart = Object.keys(chartDataMap).map((key) => ({
        name: key,
        value: chartDataMap[key]
    }));

    const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold p-4'>Friendship Analytics</h2>

            {timelineData && timelineData.length > 0 ? (
                <div className='w-3/4 mx-auto rounded-lg h-100 flex flex-col justify-center p-4 bg-white shadow-lg mb-4' >
                    <div>
                        <h2 className='text-lg font-semibold text-purple-950 opacity-60'>By Interaction Type</h2>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={dataForChart}
                                innerRadius="70%"
                                outerRadius="90%"
                                cornerRadius={10}
                                paddingAngle={8}
                                dataKey="value"
                                isAnimationActive={true}
                                cx="50%"
                                cy="50%"
                            >

                                {dataForChart.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                                ))}
                            </Pie>

                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Legend verticalAlign="bottom" height={36} iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <div className='container mx-auto px-10 mb-4'>
                    <div className="flex flex-col items-center justify-center min-h-75 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-100/50 p-10">
                        <div className="w-12 h-12 mb-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                            <span className="text-2xl text-gray-400"><MdOutlineDataUsage /></span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Nothing to show</h3>
                        <p className="text-gray-500 text-center max-w-3/4">
                            Call, Text or make a Video Call to a friend to see your stats.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stats;