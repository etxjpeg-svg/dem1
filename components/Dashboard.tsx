
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Dashboard: React.FC = () => {
  const [aiInsight, setAiInsight] = useState<string>("Analyzing recent data...");
  const [loadingInsight, setLoadingInsight] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: 'Provide a very brief (2 sentences) professional hotel management tip for a dashboard today focusing on weekend occupancy optimization. Keep it encouraging.',
        });
        setAiInsight(response.text || "Optimize your weekend rates to capture last-minute leisure bookings.");
      } catch (error) {
        setAiInsight("Maintain competitive weekend pricing to drive occupancy.");
      } finally {
        setLoadingInsight(false);
      }
    };
    fetchInsight();
  }, []);

  const stats = [
    { label: "Today's Occupancy", value: "82%", sub: "41 / 50 Rooms", color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Check-ins", value: "12", sub: "3 Remaining", color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Check-outs", value: "08", sub: "5 Finished", color: "text-amber-600", bg: "bg-amber-50" },
    { label: "RevPAR", value: "$142", sub: "+$12 from yest.", color: "text-rose-600", bg: "bg-rose-50" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* AI Insight Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-6 text-white shadow-xl shadow-indigo-200">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Smart PMS Insights</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {loadingInsight ? "Magic is happening..." : aiInsight}
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <div className="flex items-baseline space-x-2">
              <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-xs font-semibold text-slate-400">{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Availability Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Room Status Today</h3>
            <button className="text-indigo-600 text-sm font-semibold hover:underline">View Calendar</button>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { type: 'Deluxe Suite', avail: 2, total: 10, price: '$220' },
                { type: 'Double Standard', avail: 5, total: 20, price: '$140' },
                { type: 'Single Economy', avail: 0, total: 15, price: '$95' },
                { type: 'Family Studio', avail: 2, total: 5, price: '$180' },
              ].map((room, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${room.avail === 0 ? 'bg-rose-500' : room.avail < 3 ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
                    <div>
                      <p className="font-semibold text-slate-800">{room.type}</p>
                      <p className="text-xs text-slate-500">{room.avail} left of {room.total} rooms</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-800">{room.price}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Base Rate</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-800">Recent Activity</h3>
          </div>
          <div className="p-6 space-y-6">
            {[
              { time: '10m ago', text: 'Walk-in Booking: John Doe', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'bg-indigo-50 text-indigo-600' },
              { time: '45m ago', text: 'Expedia Sync: 2 bookings', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', color: 'bg-emerald-50 text-emerald-600' },
              { time: '1h ago', text: 'Checked Out: Room 402', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-slate-50 text-slate-600' },
              { time: '2h ago', text: 'Rate Update: All rooms +5%', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', color: 'bg-amber-50 text-amber-600' },
            ].map((activity, i) => (
              <div key={i} className="flex space-x-4">
                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${activity.color}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activity.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800 leading-tight">{activity.text}</p>
                  <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
