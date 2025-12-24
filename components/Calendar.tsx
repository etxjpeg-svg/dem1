
import React, { useState } from 'react';

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState('October 2024');
  
  const roomTypes = [
    { name: 'Deluxe Suite', capacity: 10 },
    { name: 'Double Standard', capacity: 20 },
    { name: 'Single Economy', capacity: 15 },
    { name: 'Family Studio', capacity: 5 },
  ];

  // Mock days for 2 weeks
  const days = Array.from({ length: 14 }, (_, i) => ({
    day: i + 1,
    weekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][(i + 1) % 7],
    isWeekend: (i + 1) % 7 === 0 || (i + 1) % 7 === 6
  }));

  const getAvailStatus = (avail: number, total: number) => {
    if (avail === 0) return 'bg-rose-100 text-rose-700 border-rose-200';
    if (avail < 3) return 'bg-amber-100 text-amber-700 border-amber-200';
    return 'bg-emerald-50 text-emerald-700 border-emerald-100';
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm animate-in slide-in-from-bottom-4 duration-500">
      <div className="p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-bold text-slate-800">{currentMonth}</h3>
          <div className="flex space-x-1">
            <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <button className="px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg hover:bg-white transition-colors">
            Today
          </button>
        </div>
        
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-200"></span>
            <span className="text-slate-500">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded bg-amber-100 border border-amber-200"></span>
            <span className="text-slate-500">Limited</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded bg-rose-100 border border-rose-200"></span>
            <span className="text-slate-500">Sold Out</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="sticky left-0 z-10 bg-slate-50 p-4 text-left border-r border-slate-200 min-w-[200px] text-xs font-bold text-slate-400 uppercase tracking-wider">
                Room Types
              </th>
              {days.map((day, idx) => (
                <th key={idx} className={`p-4 border-b border-slate-200 min-w-[80px] text-center ${day.isWeekend ? 'bg-slate-100/50' : ''}`}>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">{day.weekday}</p>
                  <p className="text-sm font-bold text-slate-800">{day.day}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roomTypes.map((room, ridx) => (
              <tr key={ridx} className="border-b border-slate-100 hover:bg-slate-50/50">
                <td className="sticky left-0 z-10 bg-white p-4 border-r border-slate-200">
                  <p className="font-semibold text-slate-800">{room.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{room.capacity} Total</p>
                </td>
                {days.map((day, didx) => {
                  // Fake logic for availability
                  const avail = Math.floor(Math.random() * (room.capacity + 2));
                  const displayAvail = Math.min(avail, room.capacity);
                  const statusClass = getAvailStatus(displayAvail, room.capacity);
                  
                  return (
                    <td key={didx} className={`p-2 text-center transition-all ${day.isWeekend ? 'bg-slate-50/30' : ''}`}>
                      <div className={`py-3 px-1 rounded-xl border-2 text-sm font-bold flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform ${statusClass}`}>
                        <span>{displayAvail}</span>
                        <span className="text-[10px] opacity-70">left</span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
