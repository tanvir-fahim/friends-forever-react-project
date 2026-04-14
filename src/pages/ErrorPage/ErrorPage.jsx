import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">
            <div className="text-center">

                <h1 className="text-8xl font-extrabold text-gray-400">
                    404
                </h1>

                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-3 text-gray-500 max-w-md mx-auto">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                <div className='mt-6'>
                    <Link to= "/"
                    className="mt-6 px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg">
                        Go Back Home
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;