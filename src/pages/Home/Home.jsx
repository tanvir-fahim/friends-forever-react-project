import React, { Suspense, use } from 'react';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import AllFriends from '../../components/HomeBanner/AllFriends';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const friendsPromise = fetch("/friendsData.json").then(res => res.json());

const Home = () => {

    const friends = use(friendsPromise);

    return (
        <div>
            <HomeBanner />
            <Suspense fallback = {<LoadingSpinner/>}>
                <AllFriends friends={friends} />
            </Suspense>
        </div>
    );
};

export default Home;