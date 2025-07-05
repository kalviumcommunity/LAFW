import React from 'react';

// This is a static, visual-only representation of the form.
const LostItemForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('This is a static form. Submissions are disabled.');
    };
// DONE
    return (
        <div className="bg-slate-50 min-h-[calc(100vh-80px)] px-4 py-12 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-3xl">
                <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 border-b border-slate-200 pb-4">Report a Lost Item</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="md:col-span-2">
                            <label htmlFor="name" className="form-label">Item Name</label>
                            <input type="text" id="name" className="form-input" required placeholder="E.g., Black Leather Wallet, Set of Keys" />
                        </div>
                        <div>
                            <label htmlFor="dateLost" className="form-label">Date Lost</label>
                            <input type="date" id="dateLost" className="form-input" required />
                        </div>
                        <div>
                            <label htmlFor="locationLost" className="form-label">Last Known Location</label>
                            <input type="text" id="locationLost" placeholder="E.g., Central Park near fountain" className="form-input" required />
                        </div>
                        <div>
                            <label htmlFor="contactNo" className="form-label">Your Contact Number</label>
                            <input type="tel" id="contactNo" placeholder="So a finder can reach you" className="form-input" required />
                        </div>
                        <div>
                            <label htmlFor="govtIdFile" className="form-label">Government ID <span className="text-xs text-slate-500 font-normal">(private)</span></label>
                            <input type="file" id="govtIdFile" className="form-file-input" required />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="itemFiles" className="form-label">Item Images <span className="text-xs text-slate-500 font-normal">(1-5 images)</span></label>
                            <input type="file" id="itemFiles" className="form-file-input" required multiple />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="description" className="form-label">Detailed Description</label>
                            <textarea id="description" placeholder="Color, brand, size, unique marks..." className="form-input min-h-[100px]" required></textarea>
                        </div>
                    </div>
                    <div className="mt-8 pt-5 border-t border-slate-200 flex justify-center">
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out shadow-sm"
                        >
                            Submit Lost Item Report
                        </button>
                    </div>
                </form>
            </div>
            <style jsx global>{`
                 .form-label { @apply block text-slate-700 text-sm font-semibold mb-1.5; }
                 .form-input { @apply block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm; }
                 .form-file-input { @apply block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-slate-300 file:text-sm file:font-semibold file:bg-slate-50 file:text-indigo-600 hover:file:bg-slate-100 cursor-pointer; }
            `}</style>
        </div>
    );
};

export default LostItemForm;