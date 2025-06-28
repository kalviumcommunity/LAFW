import React from 'react';
import ItemCard from '../components/ItemCard';

// Static data for demonstration
const staticLostItems = [
    { id: 1, type: 'lost', name: 'iPhone 13 in Blue Case', date: '18 Apr, 2024', description: 'Lost my phone, likely on the downtown bus...', imageUrl: '/placeholder-image.png' },
    { id: 2, type: 'lost', name: 'University Keys', date: '12 Apr, 2024', description: 'Set of keys on a red lanyard with a university logo.', imageUrl: '/placeholder-image-2.png' },
];
const staticFoundItems = [
    { id: 3, type: 'found', name: 'Black North Face Backpack', date: '20 Apr, 2024', description: 'Found a backpack near the library entrance. Seems to contain textbooks.', imageUrl: '/placeholder-image-3.png' },
];

const MyReportsPage = () => {
    return (
        <div className="bg-slate-50 min-h-[calc(100vh-150px)]">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 border-b border-slate-200 pb-4 text-slate-800">My Reported Items</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-700">Items You Reported Lost ({staticLostItems.length})</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {staticLostItems.map((item) => <ItemCard key={item.id} item={item} />)}
                    </div>
                </section>

                 <section>
                    <h2 className="text-2xl font-semibold mb-4 text-slate-700">Items You Reported Found ({staticFoundItems.length})</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {staticFoundItems.map((item) => <ItemCard key={item.id} item={item} />)}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MyReportsPage;