import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(null);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check server health
        const healthResponse = await fetch('http://localhost:5000/api/health');
        const healthData = await healthResponse.json();
        setServerStatus(healthData);

        // Fetch features
        const featuresResponse = await fetch('http://localhost:5000/api/features');
        const featuresData = await featuresResponse.json();
        setFeatures(featuresData.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setServerStatus({ status: 'ERROR', message: 'Backend not connected' });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Server Status */}
        <div className="mb-8">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
            serverStatus?.status === 'OK'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            <span className={`w-2 h-2 rounded-full mr-2 ${
              serverStatus?.status === 'OK' ? 'bg-green-600' : 'bg-red-600'
            }`}></span>
            {serverStatus?.message || 'Checking server...'}
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            MERN + Tailwind Template
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A clean starter template showcasing data fetching from Express backend
            and beautiful UI with Tailwind CSS
          </p>
        </div>

        {/* Features from Backend */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Features from Backend API
          </h2>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Template Showcase */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Template Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">React 19</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Latest React with modern features</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tailwind CSS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Utility-first CSS framework</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vite</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Lightning fast build tool</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Express</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Fast, minimalist web framework</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
