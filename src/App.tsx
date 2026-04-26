/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar, Sidebar } from './components/Navigation';
import DashboardView from './views/Dashboard';
import LandingView from './views/Landing';
import PriorityCenterView from './views/PriorityCenter';
import InteractiveMapView from './views/InteractiveMap';
import JoinView from './views/Join';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'landing':
        return <LandingView onJoinClick={() => setActiveTab('join')} />;
      case 'dashboard':
      case 'operations':
        return <DashboardView />;
      case 'priority':
      case 'ai':
        return <PriorityCenterView />;
      case 'map':
        return <InteractiveMapView />;
      case 'join':
        return <JoinView />;
      default:
        return <LandingView onJoinClick={() => setActiveTab('join')} />;
    }
  };

  const isMapTab = activeTab === 'map';

  return (
    <div className="min-h-screen bg-surface selection:bg-wesal-navy/10">
      <Navbar 
        onMenuClick={() => setIsSidebarOpen(true)} 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className={`transition-all duration-300 ${!isMapTab ? 'md:mr-64 p-6 lg:p-10' : ''}`}>
        <div className={!isMapTab ? 'max-w-[1440px] mx-auto' : ''}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

