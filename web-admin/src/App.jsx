import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Creditos from './components/Creditos';
import DetailsModal from './components/DetailsModal';
import Login from './components/Login';
import LandingPage from './components/LandingPage';

function App() {
  const [appRoute, setAppRoute] = useState('landing'); // 'landing', 'login', 'app'
  const [currentView, setView] = useState('dashboard');

  if (appRoute === 'landing') {
    return <LandingPage onNavigate={setAppRoute} />;
  }

  if (appRoute === 'login') {
    return <Login onLogin={() => setAppRoute('app')} onBack={() => setAppRoute('landing')} />;
  }

  return (
    <>
      <Sidebar currentView={currentView} setView={setView} onLogout={() => setAppRoute('landing')} />
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
