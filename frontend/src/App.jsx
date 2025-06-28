import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import LostItemForm from './pages/LostItemForm';
import FoundItemForm from './pages/FoundItemForm';
import SearchResultsPage from './pages/SearchResultsPage';
import MyReportsPage from './pages/MyReportsPage';
import ItemDetailPage from './pages/ItemDetailPage';
import About from './pages/About';
import Guidelines from './pages/Guidelines';
import Disclaimer from './pages/Disclaimer';
import Contact from './pages/Contact';

// Placeholder for uncreated pages
const PlaceholderPage = ({ title = "Page Under Construction" }) => (
  <div className="container mx-auto p-8 text-center min-h-[calc(100vh-250px)] flex items-center justify-center">
    <h1 className="text-3xl font-semibold text-slate-500">{title}</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResultsPage />} />
            
            {/* Reporting and User-Specific Pages (Now public for static site) */}
            <Route path="/report-lost" element={<LostItemForm />} />
            <Route path="/report-found" element={<FoundItemForm />} />
            <Route path="/my-reports" element={<MyReportsPage />} />
            <Route path="/item-detail-placeholder/:id" element={<ItemDetailPage />} />

            {/* Static Content Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/contact" element={<Contact />} />

            {/* Auth pages now just placeholders */}
            <Route path="/login" element={<PlaceholderPage title="Login Page" />} />
            <Route path="/signup" element={<PlaceholderPage title="Signup Page" />} />
            <Route path="/profile" element={<PlaceholderPage title="Profile Page" />} />
            <Route path="/dashboard" element={<PlaceholderPage title="Dashboard" />} />

            {/* 404 Not Found */}
            <Route path="*" element={<PlaceholderPage title="404: Page Not Found" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;