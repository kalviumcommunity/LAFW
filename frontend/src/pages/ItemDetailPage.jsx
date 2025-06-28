import React from 'react';
import { useNavigate } from 'react-router-dom';

// This is a static placeholder page. It does not fetch data.
const ItemDetailPage = () => {
    const navigate = useNavigate();
    const isFoundItemPage = true; // Static example

    // Static placeholder data
    const item = {
        name: 'Classic Brown Leather Wallet',
        date: '15 April, 2024',
        location: 'Central Park, near the fountain',
        reportedBy: 'Jane D.',
        description: 'A classic bifold brown leather wallet. Slightly worn on the corners. Contained a library card and a few business cards. No cash was inside when I found it.',
        images: ['/placeholder-image.png', '/placeholder-image-2.png']
    };

    return (
        <div className="bg-slate-50">
            <div className="container mx-auto px-4 py-12">
                <button onClick={() => navigate(-1)} className="text-indigo-600 hover:underline text-sm mb-6 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Results
                </button>

                <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                        {/* Image Section */}
                        <div className="md:col-span-1">
                            <img
                                src={item.images[0]}
                                alt={item.name}
                                className="w-full h-auto object-cover rounded-lg border border-slate-200 shadow-sm mb-4 bg-slate-100"
                            />
                            <div className="flex flex-wrap gap-2">
                                {item.images.map((imgSrc, index) => (
                                     <img
                                        key={index}
                                        src={imgSrc}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-16 h-16 object-cover rounded border-2 border-transparent hover:border-indigo-500 cursor-pointer"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="md:col-span-2">
                             <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${isFoundItemPage ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                Status: {isFoundItemPage ? 'Found' : 'Lost'}
                            </span>
                            <h1 className="text-3xl font-bold text-slate-800 mb-4">{item.name}</h1>

                             <dl className="space-y-3 text-sm text-slate-700 mb-6 border-y border-slate-200 py-4">
                                 <div className="flex"><dt className="w-28 font-semibold text-slate-500 shrink-0">{isFoundItemPage ? 'Date Found:' : 'Date Lost:'}</dt><dd>{item.date}</dd></div>
                                 <div className="flex"><dt className="w-28 font-semibold text-slate-500 shrink-0">{isFoundItemPage ? 'Location:' : 'Last Seen:'}</dt><dd>{item.location}</dd></div>
                                 <div className="flex"><dt className="w-28 font-semibold text-slate-500 shrink-0">Reported By:</dt><dd>{item.reportedBy}</dd></div>
                            </dl>

                            <h3 className="text-lg font-semibold text-slate-800 mb-2">Description</h3>
                            <p className="text-slate-600 whitespace-pre-wrap leading-relaxed mb-6">{item.description}</p>

                             {/* Static Claim Form */}
                             <div className="mt-8 border-t-2 border-dashed border-slate-200 pt-6">
                                <h3 className="text-xl font-semibold text-slate-800 mb-4">Claim This Item</h3>
                                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                    <div>
                                        <label htmlFor="claimName" className="block text-sm font-medium text-slate-700 mb-1">Your Full Name</label>
                                        <input type="text" id="claimName" className="input-style" required />
                                    </div>
                                    <div>
                                        <label htmlFor="claimDescription" className="block text-sm font-medium text-slate-700 mb-1">Proof of Ownership / Identifying Details</label>
                                        <textarea id="claimDescription" rows="3" className="input-style" required placeholder="Describe something unique..."></textarea>
                                        <p className="text-xs text-slate-500 mt-1">Help the finder verify it's yours.</p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md transition duration-150"
                                    >
                                        Submit Claim
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <style jsx>{`
                .input-style { @apply shadow-sm appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent; }
             `}</style>
        </div>
    );
};

export default ItemDetailPage;