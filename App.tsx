
import React, { useState } from 'react';
import { ViewType } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import Inventory from './components/Inventory';
import ChannelManager from './components/ChannelManager';
import Analytics from './components/Analytics';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.DASHBOARD);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case ViewType.DASHBOARD:
        return <Dashboard />;
      case ViewType.CALENDAR:
        return <Calendar />;
      case ViewType.INVENTORY:
        return <Inventory />;
      case ViewType.CHANNELS:
        return <ChannelManager />;
      case ViewType.ANALYTICS:
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        onQuickBooking={() => setIsBookingModalOpen(true)} 
      />
      
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-slate-800">
            {currentView.charAt(0) + currentView.slice(1).toLowerCase().replace('_', ' ')}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>Sync Live</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border border-slate-300">
              <img src="https://picsum.photos/id/64/100/100" alt="Avatar" />
            </div>
          </div>
        </header>

        {/* View Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {renderView()}
        </div>
      </main>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <BookingModal onClose={() => setIsBookingModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
