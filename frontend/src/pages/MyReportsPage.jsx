import React from 'react';

// --- NEW COMPONENT: ItemCard ---
// This component displays a single item and includes a static "Edit" button.
const ItemCard = ({ item }) => {
    // Determine badge color based on item type
    const badgeColor = item.type === 'lost' ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800';

    const handleEdit = () => {
        alert(`This is a static component. Edit functionality for "${item.name}" is disabled.`);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105">
            <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${badgeColor}`}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <span className="text-xs text-slate-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{item.name}</h3>
                <p className="text-sm text-slate-600 flex-grow mb-4">{item.description}</p>
                <div className="mt-auto pt-3 border-t border-slate-200">
                    <button
                        onClick={handleEdit}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    >
                        Edit Report
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Provided Page Component ---
// This component now uses the ItemCard defined above.

// Static data for demonstration
const staticLostItems = [
    { id: 1, type: 'lost', name: 'iPhone 13 in Blue Case', date: '18 Apr, 2024', description: 'Lost my phone, likely on the downtown bus...', imageUrl: 'https://placehold.co/600x400/3b82f6/white?text=iPhone' },
    { id: 2, type: 'lost', name: 'University Keys', date: '12 Apr, 2024', description: 'Set of keys on a red lanyard with a university logo.', imageUrl: 'https://placehold.co/600x400/ef4444/white?text=Keys' },
];
const staticFoundItems = [
    { id: 3, type: 'found', name: 'Black North Face Backpack', date: '20 Apr, 2024', description: 'Found a backpack near the library entrance. Seems to contain textbooks.', imageUrl: 'https://placehold.co/600x400/1f2937/white?text=Backpack' },
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