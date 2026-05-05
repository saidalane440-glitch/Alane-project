/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './components/LoginPage';
import DashboardLayout from './components/DashboardLayout';
import ExploreView from './components/ExploreView';
import FilesView from './components/FilesView';
import ProjectsView from './components/ProjectsView';
import KloppoAI from './components/KloppoAI';

function AppContent() {
  const { user, loading, signIn } = useAuth();
  const [currentView, setCurrentView] = useState('explore');

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0505] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-red-500 font-black tracking-widest text-xs uppercase animate-pulse">Initializing Vault...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <div onClick={signIn} className="cursor-pointer"><LoginPage /></div>;
  }

  const renderView = () => {
    switch (currentView) {
      case 'explore': return <ExploreView />;
      case 'files':
      case 'docs':
      case 'videos': return <FilesView />;
      case 'projects': return <ProjectsView />;
      case 'ai': return <KloppoAI />;
      default: return <ExploreView />;
    }
  };

  return (
    <DashboardLayout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </DashboardLayout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

