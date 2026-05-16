import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Creditos from './components/Creditos';
import DetailsModal from './components/DetailsModal';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setView] = useState('dashboard');

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <>
      <Sidebar currentView={currentView} setView={setView} onLogout={() => setIsAuthenticated(false)} />
      <main className="main-wrapper">
        {/* Hide Topbar when viewing details to match the HTML behavior */}
        {currentView !== 'details' && <Topbar />}
        
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'creditos' && <Creditos setView={setView} />}
        {currentView === 'details' && <DetailsModal setView={setView} />}
      </main>
    </>
  );
}

export default App;
