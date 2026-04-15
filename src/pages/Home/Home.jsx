import React, { Suspense } from 'react';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import AllFriends from '../../components/HomeBanner/AllFriends';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const friendsPromise = fetch("/friendsData.json").then(res => res.json());

const Home = () => {

    return (
        <div>
            <HomeBanner />
            <div className='container mx-auto'>
                <h2 className='font-bold text-3xl mb-6'>Your Friends</h2>
            </div>
            <Suspense fallback={<LoadingSpinner />}>
                <AllFriends friendsPromise={friendsPromise} />
            </Suspense>
        </div>
    );
};

export default Home;