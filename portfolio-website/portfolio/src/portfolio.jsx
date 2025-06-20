// Keiondre Jordan's Portfolio Website
// React + TailwindCSS Design, AI-inspired

import bgAiCircuit from './assets/bg-ai-circuit.png';

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-gray-950 to-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black bg-opacity-40 shadow-md">
        <h1 className="text-2xl font-bold text-teal-400">Keiondre Jordan</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-teal-300">Home</a>
          <a href="#data-engineering" className="hover:text-teal-300">Data Engineering</a>
          <a href="#data-analyst" className="hover:text-teal-300">Data Analyst</a>
          <a href="#ai-ml" className="hover:text-teal-300">AI + ML</a>
        </div>
      </nav>

      {/* Start of Home Section */}
      {/* Hero Section with AI-Inspired Background */}
      <section
        id="home"
        className="relative text-center py-28 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/bg-ai-circuit.png')", }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <h2 className="text-5xl md:text-7xl font-extrabold text-white z-10 relative drop-shadow-lg">
          Data Meets Design. <br />
          <span className="text-teal-400">Keiondre Jordan</span>
        </h2>

        <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto z-10 relative">
          Engineering smarter systems. Visualizing truth. Building AI fluency for 2027 and beyond.
        </p>

        <div className="flex justify-center gap-6 mt-10 z-10 relative">
          <a href="#data-engineering" className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-6 py-3 rounded-2xl shadow-xl">Data Engineering</a>
          <a href="#data-analyst" className="bg-blue-500 hover:bg-blue-400 text-black font-bold px-6 py-3 rounded-2xl shadow-xl">Data Analyst</a>
          <a href="#ai-ml" className="bg-purple-600 hover:bg-purple-500 text-black font-bold px-6 py-3 rounded-2xl shadow-xl">AI + ML</a>
        </div>

        <p className="mt-4 text-sm text-gray-400 z-10 relative">AI + ML Section Launching May 2026</p>
      </section>
      {/* End of Home Section */}

      {/* Data Engineering Section */}
      <section id="data-engineering" className="bg-gray-950 py-20 px-6 border-t border-gray-800">
        <h3 className="text-3xl font-semibold mb-4 text-teal-300">Data Engineering</h3>
        <p className="text-lg text-gray-300 mb-6 max-w-3xl">
          From building robust pipelines with Apache Spark and Kafka to managing data lakes with AWS S3, here’s where I show off the backend work that powers real-time analytics and scalable architecture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h4 className="text-xl font-bold text-teal-200">Real-Time Stock Monitoring</h4>
            <p className="text-sm text-gray-300 mt-2">Apache Kafka + Airflow + S3 pipeline for stock data ingestion and alerting.</p>
          </div>
        </div>
      </section>

      {/* Data Analyst Section */}
      <section id="data-analyst" className="bg-gray-900 py-20 px-6 border-t border-gray-800">
        <h3 className="text-3xl font-semibold mb-4 text-blue-300">Data Analyst</h3>
        <p className="text-lg text-gray-300 mb-6 max-w-3xl">
          Visual storytelling and data transformation with SQL, Python, and Power BI. See how I turn raw data into sharp, decision-driving dashboards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h4 className="text-xl font-bold text-blue-200">Sales Performance Dashboard</h4>
            <p className="text-sm text-gray-300 mt-2">Dynamic Power BI dashboard revealing product trends and regional KPIs.</p>
          </div>
        </div>
      </section>

      {/* AI + ML Section */}
      <section id="ai-ml" className="bg-gradient-to-br from-gray-800 to-black py-20 px-6 border-t border-gray-800">
        <h3 className="text-3xl font-semibold mb-4 text-purple-300">AI + ML (Coming May '26)</h3>
        <p className="text-lg text-gray-300 max-w-3xl">
          This section is reserved for my upcoming deep dive into AI and machine learning. Expect projects on predictive modeling, deep learning, and generative AI to launch in 2026.
        </p>
        <div className="mt-6 text-gray-400 italic">Stay tuned — the future is loading...</div>
      </section>

      {/* Blog Scroll Section (Commented Out for Now) */}
      {/*
      <section id="blog-preview" className="bg-gray-950 py-20 px-6 border-t border-gray-800">
        <h3 className="text-3xl font-semibold mb-4 text-green-300">Blog Highlights</h3>
        <div className="overflow-x-hidden overflow-y-scroll h-[400px] border rounded-xl p-4 bg-gray-900">
          <div className="space-y-6">
            <article className="bg-gray-800 p-4 rounded-xl">
              <h4 className="text-xl font-bold text-green-200">The Rise of Generative AI in Data Workflows</h4>
              <p className="text-sm text-gray-300">A sneak peek into how GenAI is reshaping the role of data engineers and analysts...</p>
            </article>
            <article className="bg-gray-800 p-4 rounded-xl">
              <h4 className="text-xl font-bold text-green-200">Why Every Analyst Needs Python</h4>
              <p className="text-sm text-gray-300">Explore how Python unlocks automation, storytelling, and data agility at scale...</p>
            </article>
          </div>
          <div className="text-center mt-6">
            <a href="https://medium.com/@keiondretrades" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              View Full Blog on Medium →
            </a>
          </div>
        </div>
      </section>
      */}

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t border-gray-800">
        © 2025 Keiondre Jordan. Built with code, creativity, and creatine.
      </footer>
    </div>
  );
}
