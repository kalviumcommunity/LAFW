import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">
            About Founder's Hub
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-700 mb-3">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              Losing something valuable can be distressing, and finding something without knowing its owner can be frustrating. Founder's Hub was created to bridge this gap. Our mission is to provide a simple, reliable, and community-driven platform to help reunite lost items with their rightful owners efficiently and securely.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-700 mb-3">How We Help</h2>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
              <li>
                <strong className="font-medium text-slate-700">Easy Reporting:</strong> Quickly post details and photos of items you've lost or found using our straightforward forms.
              </li>
              <li>
                <strong className="font-medium text-slate-700">Smart Search:</strong> Our platform helps you search through listings to find potential matches for your lost item.
              </li>
              <li>
                <strong className="font-medium text-slate-700">Secure Connection:</strong> Initiate claims for found items and connect directly with the reporter to verify ownership and arrange a safe return.
              </li>
            </ul>
          </section>

          <section>
              <h2 className="text-2xl font-semibold text-slate-700 mb-3">Our Commitment</h2>
              <p className="text-slate-600 leading-relaxed">
                  We are committed to fostering a trustworthy environment. Please review our <Link to="/guidelines" className="text-indigo-600 hover:underline font-medium">Guidelines</Link> and <Link to="/disclaimer" className="text-indigo-600 hover:underline font-medium">Disclaimer</Link> for more information on using the platform safely and effectively.
              </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;