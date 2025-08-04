import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ChartsPage from "./pages/ChartsPage";
import TransactionList from "./pages/TransactionList";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored) {
      setDarkMode(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
          <header className="bg-white dark:bg-gray-800 shadow p-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <nav className="flex gap-4">
                <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Dashboard</Link>
                <Link to="/charts" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Charts</Link>
                <Link to="/transactions" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Transactions</Link>
              </nav>
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </header>

          <main className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/charts" element={<ChartsPage />} />
              <Route path="/transactions" element={<TransactionList />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
