
import React from 'react';

const ChannelManager: React.FC = () => {
  const channels = [
    { name: 'Booking.com', status: 'live', lastSync: '2 mins ago', bookings: 142, logo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg' },
    { name: 'Expedia', status: 'live', lastSync: '5 mins ago', bookings: 88, logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Expedia_Logo_2023.svg' },
    { name: 'Agoda', status: 'syncing', lastSync: 'In progress', bookings: 34, logo: 'https://logos-world.net/wp-content/uploads/2021/08/Agoda-Logo.png' },
    { name: 'Airbnb', status: 'live', lastSync: '12 mins ago', bookings: 56, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Belo.svg' },
    { name: 'Hotel Website', status: 'live', lastSync: 'Real-time', bookings: 21, logo: 'https://picsum.photos/id/10/50/50' },
    { name: 'MakeMyTrip', status: 'error', lastSync: 'Failed 1h ago', bookings: 0, logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/MakeMyTrip_Logo.png' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">● Live</span>;
      case 'syncing':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 animate-pulse">↻ Syncing</span>;
      case 'error':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">! Error</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {channels.map((channel, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all group relative overflow-hidden">
            <div className="flex items-start justify-between mb-6">
              <div className="h-10 w-24 flex items-center grayscale group-hover:grayscale-0 transition-all">
                <img src={channel.logo} alt={channel.name} className="max-h-full max-w-full object-contain" />
              </div>
              {getStatusBadge(channel.status)}
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Total Bookings (Mo)</span>
                <span className="font-bold text-slate-800">{channel.bookings}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Last Synced</span>
                <span className="text-slate-400">{channel.lastSync}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-50 flex space-x-2">
              <button className="flex-1 px-3 py-2 text-xs font-bold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                Configure
              </button>
              <button className="px-3 py-2 text-xs font-bold bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
                Sync Now
              </button>
            </div>
            
            {channel.status === 'error' && (
              <div className="absolute top-0 right-0 p-1">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              </div>
            )}
          </div>
        ))}

        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-slate-100 transition-colors text-slate-400 group">
          <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center mb-3 group-hover:border-indigo-400 group-hover:text-indigo-500 transition-all">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest">Connect New OTA</span>
        </div>
      </div>
    </div>
  );
};

export default ChannelManager;
