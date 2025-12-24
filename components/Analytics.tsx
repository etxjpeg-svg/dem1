
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

const Analytics: React.FC = () => {
  const data = [
    { name: 'Mon', revenue: 4000, occupancy: 70 },
    { name: 'Tue', revenue: 3000, occupancy: 65 },
    { name: 'Wed', revenue: 2000, occupancy: 58 },
    { name: 'Thu', revenue: 2780, occupancy: 62 },
    { name: 'Fri', revenue: 1890, occupancy: 85 },
    { name: 'Sat', revenue: 2390, occupancy: 95 },
    { name: 'Sun', revenue: 3490, occupancy: 88 },
  ];

  const pieData = [
    { name: 'Online (OTA)', value: 65, color: '#6366f1' },
    { name: 'Direct Website', value: 20, color: '#8b5cf6' },
    { name: 'Offline/Walk-in', value: 15, color: '#f43f5e' },
  ];

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Revenue Performance ($)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Occupancy Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Occupancy Rate (%)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="occupancy" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Channel Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Booking Channels</h3>
          <p className="text-sm text-slate-400 mb-6">Split between online and offline sources</p>
          <div className="flex flex-col md:flex-row items-center">
            <div className="h-64 w-full md:w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              {pieData.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm font-medium text-slate-700">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 grid grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-50 rounded-2xl flex flex-col justify-center">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Avg Daily Rate</p>
            <p className="text-2xl font-bold text-indigo-900">$185.20</p>
            <p className="text-xs text-indigo-600 mt-1 font-semibold">↑ 4.2% vs Last Mo</p>
          </div>
          <div className="p-4 bg-rose-50 rounded-2xl flex flex-col justify-center">
            <p className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">RevPAR</p>
            <p className="text-2xl font-bold text-rose-900">$152.00</p>
            <p className="text-xs text-rose-600 mt-1 font-semibold">↑ 2.1% vs Last Mo</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-2xl flex flex-col justify-center">
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Direct Rev</p>
            <p className="text-2xl font-bold text-emerald-900">$12.4k</p>
            <p className="text-xs text-emerald-600 mt-1 font-semibold">↑ 12% Goal</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl flex flex-col justify-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Cancel Rate</p>
            <p className="text-2xl font-bold text-slate-900">4.5%</p>
            <p className="text-xs text-slate-500 mt-1 font-semibold">↓ Healthy Range</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
