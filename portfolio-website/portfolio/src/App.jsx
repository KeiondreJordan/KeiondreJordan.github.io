// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Portfolio from './portfolio';
import DataEngineering from './pages/dataEngineering';
import DataAnalyst from './pages/dataAnalytics';
import AiMl from './pages/AiMl';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <header className="bg-black-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Keiondre Jordan!</h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-teal-300">Home</Link>
          <Link to="/data-engineering" className="hover:text-teal-300">Data Engineering</Link>
          <Link to="/data-analyst" className="hover:text-teal-300">Data Analyst</Link>
          <Link to="/AiMl" className="hover:text-teal-300">AI + ML</Link>
        </nav>
      </header>
      {isOpen && (
        <div className="md:hidden bg-blue-800 text-white px-6 py-4 space-y-2">
          <Link to="/" className="block hover:text-teal-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/data-engineering" className="block hover:text-teal-300" onClick={() => setIsOpen(false)}>Data Engineering</Link>
          <Link to="/data-analyst" className="block hover:text-teal-300" onClick={() => setIsOpen(false)}>Data Analyst</Link>
          <Link to="/ai-ml" className="block hover:text-teal-300" onClick={() => setIsOpen(false)}>AI + ML</Link>
        </div>
      )}

    {/* Routes for links to other pages */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/data-analyst" element={<DataAnalyst />} />
        <Route path="/data-engineering" element={<DataEngineering />} />
        <Route path="/ai-ml" element={<ai-ml />} />
      </Routes>
    </Router>
  );
}
