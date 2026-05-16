import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Creditos from './components/Creditos';
import DetailsModal from './components/DetailsModal';

function App() {
  const [currentView, setView] = useState('dashboard');

  return (
    <>
      <Sidebar currentView={currentView} setView={setView} />
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
