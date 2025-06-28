import React from 'react';
import { Link } from 'react-router-dom';

const Guidelines = () => {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">
            Community Guidelines & Safety Tips
          </h1>
          <p className="mb-8 text-slate-600">
            Following these guidelines helps keep Founder's Hub safe and effective for everyone.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Reporting Items</h2>
              <ul className="list-disc list-inside space-y-3 text-slate-700">
                <li><strong className="font-medium">Be Accurate:</strong> Provide clear, detailed descriptions and photos.</li>
                <li><strong className="font-medium">One Report Per Item:</strong> Avoid creating duplicate listings.</li>
                <li><strong className="font-medium">Update Status:</strong> Mark items as "Returned" or delete the report once resolved.</li>
                <li><strong className="font-medium">Prohibited Items:</strong> Do not report illegal items, weapons, or hazardous materials.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Claiming Items</h2>
              <ul className="list-disc list-inside space-y-3 text-slate-700">
                <li><strong className="font-medium">Be Honest:</strong> Only claim items that are genuinely yours.</li>
                <li><strong className="font-medium">Provide Proof:</strong> Be ready to prove ownership with details only you would know.</li>
                <li><strong className="font-medium">Verification is Key:</strong> Finders should carefully review claims before agreeing to a return.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-700 mb-4">Safety First: Arranging Returns</h2>
              <ul className="list-disc list-inside space-y-3 text-slate-700">
                <li><strong className="font-medium">Meet in Public:</strong> Arrange to meet in well-lit, public locations (e.g., coffee shop, police station lobby).</li>
                <li><strong className="font-medium">Tell Someone:</strong> Inform a friend or family member about your plans.</li>
                <li><strong className="font-medium">Trust Your Instincts:</strong> If a situation feels unsafe, leave immediately.</li>
                <li><strong className="font-medium">No Financial Transactions:</strong> Be wary of anyone demanding money for a return.</li>
              </ul>
            </section>

            <section>
                <p className="text-sm text-slate-500 italic border-t border-slate-200 pt-4">
                    Founder's Hub is a facilitator. We are not responsible for interactions or exchanges that occur offline. Please see our full <Link to="/disclaimer" className="text-indigo-600 hover:underline">Disclaimer</Link>.
                </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};





export default Guidelines;