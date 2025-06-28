import React from 'react';
import { Link } from 'react-router-dom';

// This is now a purely presentational component.
// All data (item type, status, colors, links) is passed via props.
const ItemCard = ({ item }) => {
    const itemStatus = item.type === 'lost' ? 'Lost' : 'Found';
    const statusColor = item.type === 'lost' ? 'text-red-700 bg-red-100' : 'text-emerald-700 bg-emerald-100';
    const detailLink = `/item-detail-placeholder/${item.id}`; // Static link

    return (
        <div className="group border border-slate-200 rounded-lg overflow-hidden shadow-sm bg-white flex flex-col transition-shadow duration-300 hover:shadow-lg h-full">

            {/* Image Section */}
            <Link to={detailLink} className="block w-full h-48 bg-slate-100 overflow-hidden">
                 <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                 />
            </Link>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-1 truncate text-slate-800" title={item.name}>
                    {item.name}
                </h3>

                <p className="text-xs text-slate-500 mb-2">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                        {itemStatus}
                    </span>
                    {' on '}
                    <span>{item.date}</span>
                </p>

                <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                    {item.description}
                </p>

                <Link
                    to={detailLink}
                    className="mt-auto block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ItemCard;