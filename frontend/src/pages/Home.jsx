import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const searchTerm = e.target.elements.query.value;
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    return (
        <div className="bg-slate-50">
            {/* 1. Hero Section */}
            <section className="bg-slate-700 text-white py-20 md:py-28 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                        Reuniting What's Lost
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-slate-300">
                        Our community-powered platform helps you find what you've lost and report what you've found.
                    </p>
                </div>
            </section>

            {/* 2. Search Bar Section */}
            <section className="container mx-auto px-4 -mt-12 z-10 relative">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-slate-700">
                        Search for an Item
                    </h2>
                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            name="query"
                            placeholder="E.g., 'black wallet', 'keys', 'cat'..."
                            className="flex-grow block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4"
                            aria-label="Search for items"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </section>

            {/* 3. Call-to-Action Buttons Section */}
            <section className="container mx-auto px-4 text-center py-16 md:py-20">
                 <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">
                    Get Started
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                    <Link
                        to="/report-lost"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-150 ease-in-out transform hover:scale-105"
                    >
                        Report a Lost Item
                    </Link>
                    <Link
                        to="/report-found"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-150 ease-in-out transform hover:scale-105"
                    >
                        Report a Found Item
                    </Link>
                </div>
            </section>

            {/* 4. How It Works Section */}
            <section className="bg-white py-16 md:py-20 border-t border-slate-200">
                 <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-slate-800">How It Works in 3 Simple Steps</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center">
                            <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mb-4 text-3xl font-bold">1</div>
                            <h3 className="text-lg font-semibold mb-2 text-slate-700">Report</h3>
                            <p className="text-slate-600">Quickly submit details and photos of your lost or found item.</p>
                        </div>
                         <div className="flex flex-col items-center">
                             <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mb-4 text-3xl font-bold">2</div>
                            <h3 className="text-lg font-semibold mb-2 text-slate-700">Match</h3>
                            <p className="text-slate-600">Browse listings or get notified about potential matches.</p>
                        </div>
                         <div className="flex flex-col items-center">
                             <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mb-4 text-3xl font-bold">3</div>
                            <h3 className="text-lg font-semibold mb-2 text-slate-700">Connect</h3>
                            <p className="text-slate-600">Securely connect to arrange a safe and happy reunion.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;