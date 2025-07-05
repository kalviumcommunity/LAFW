import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

// Static data for search results
const searchData = [
    { id: 1, type: 'found', name: 'Black Wallet', date: '20 Apr, 2024', description: 'Found a black leather wallet near the bus stop.', imageUrl: '/placeholder-image.png' },
    { id: 2, type: 'lost', name: 'Wallet with student ID', date: '18 Apr, 2024', description: 'Lost my wallet, it is black and has my ID.', imageUrl: '/placeholder-image-2.png' },
];
// DONE
const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    return (
        <div className="bg-slate-50 min-h-[calc(100vh-150px)]">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-2 text-slate-800">Search Results</h1>
                {query && (
                    <p className="text-slate-600 mb-6">
                        Showing results for: <span className="font-semibold text-indigo-700">"{query}"</span>
                    </p>
                )}

                <div className="mb-6">
                    <Link to="/" className="text-indigo-600 hover:underline text-sm">
                        ← New Search
                    </Link>
                </div>

                {searchData.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {searchData.map((item) => (
                            <ItemCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-slate-600 bg-white p-8 rounded-md border border-slate-200">
                        <p>No items found matching your search. Try a different term.</p>
                     </div>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;