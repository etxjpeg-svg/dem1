
import React from 'react';

const Inventory: React.FC = () => {
  const roomTypes = [
    { id: '1', name: 'Deluxe Suite', inventory: 10, baseRate: 220, active: true },
    { id: '2', name: 'Double Standard', inventory: 20, baseRate: 140, active: true },
    { id: '3', name: 'Single Economy', inventory: 15, baseRate: 95, active: true },
    { id: '4', name: 'Family Studio', inventory: 5, baseRate: 180, active: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold">Bulk Rate Update</button>
          <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-semibold">Stop Sell Manager</button>
        </div>
        <div className="text-sm text-slate-500 font-medium">
          Last manual inventory push: <span className="text-slate-800">14:02 Today</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 text-left text-xs font-bold text-slate-400 uppercase">Room Type</th>
              <th className="p-4 text-left text-xs font-bold text-slate-400 uppercase text-center">Total Inventory</th>
              <th className="p-4 text-left text-xs font-bold text-slate-400 uppercase text-center">Base Rate</th>
              <th className="p-4 text-left text-xs font-bold text-slate-400 uppercase text-center">Channel Status</th>
              <th className="p-4 text-left text-xs font-bold text-slate-400 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roomTypes.map((room) => (
              <tr key={room.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{room.name}</p>
                      <p className="text-xs text-slate-400">ID: RT-{room.id}002</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className="font-bold text-slate-800">{room.inventory}</span>
                </td>
                <td className="p-4 text-center">
                  <span className="font-bold text-slate-800">${room.baseRate}</span>
                </td>
                <td className="p-4 text-center">
                  <div className={`inline-flex items-center px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${room.active ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                    {room.active ? 'Active on OTAs' : 'Direct Only'}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-800 font-bold text-sm">Edit Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
