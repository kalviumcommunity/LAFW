import React from 'react';
import { Link } from 'react-router-dom';
// DONE
const Disclaimer = () => {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">
            Disclaimer & User Agreement
          </h1>
          <p className="mb-6 text-sm text-slate-500 italic">
            Last Updated: April 20, 2024. By using this Platform, you agree to the terms below.
          </p>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-700 mb-2">1. Platform Purpose</h2>
              <p>Founder's Hub is a community platform designed solely to facilitate connections between individuals who have lost or found items. We are not involved in the actual recovery, verification, or exchange process.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-700 mb-2">2. No Guarantees or Verification</h2>
              <p>We do not guarantee that any lost item will be found or returned. We do not verify the accuracy of user-submitted reports or the identity of users. The responsibility for verifying ownership rests solely with the users involved.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-700 mb-2">3. User Responsibility</h2>
              <p>Users are solely responsible for the content they post and for their safety when arranging meetups. We strongly advise following the <Link to="/guidelines" className="text-indigo-600 hover:underline font-medium">Safety Tips</Link> in our Guidelines.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-700 mb-2">4. Limitation of Liability</h2>
              <p>Founder's Hub, its owners, and affiliates will not be liable for any damages arising out of your use of the Platform. This includes loss of items, disputes between users, or safety issues during meetups.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;