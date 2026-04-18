"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function Explore() {
  const [filter, setFilter] = useState("All");
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/requests");
        setRequests(res.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
      setLoading(false);
    };
    fetchRequests();
  }, []);

  return (
    <div className="space-y-10 pt-8">
      {/* Header */}
      <div className="flex justify-between items-end pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-4xl font-bold mb-2">Explore Requests</h1>
          <p className="text-gray-600">Find where you can help or learn from others.</p>
        </div>
        <Link href="/create-request" className="btn-primary">Create Request</Link>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <div className="w-64 flex-shrink-0 hidden md:block">
          <div className="glass-card p-6 space-y-6 sticky top-8">
            <div>
              <h3 className="font-bold text-sm text-gray-900 mb-3 uppercase tracking-wider">Category</h3>
              <div className="space-y-2">
                {['All', 'Web Development', 'Design', 'Career', 'Other'].map(cat => (
                  <label key={cat} className="flex items-center gap-2 text-sm text-gray-600">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={filter === cat}
                      onChange={() => setFilter(cat)}
                      className="text-teal-600 focus:ring-teal-500"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm text-gray-900 mb-3 uppercase tracking-wider">Urgency</h3>
              <div className="space-y-2">
                {['Any', 'High', 'Medium', 'Low'].map(urg => (
                  <label key={urg} className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" />
                    {urg}
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-sm text-gray-900 mb-3 uppercase tracking-wider">Status</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500" />
                  Open
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" />
                  Solved
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Requests Feed */}
        <div className="flex-grow space-y-6">
          
          {loading ? (
            <p>Loading requests...</p>
          ) : requests.length === 0 ? (
            <p>No requests found. Be the first to create one!</p>
          ) : (
            requests.map((req: any) => (
              <div key={req._id} className="glass-card p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                    <span className="badge badge-gray border border-gray-200">{req.category}</span>
                    <span className={`badge border ${req.urgency === 'High' ? 'badge-red border-red-100' : 'badge-gray border-gray-200'}`}>{req.urgency}</span>
                  </div>
                  <span className="text-xs text-gray-500">{new Date(req.createdAt).toLocaleDateString()}</span>
                </div>
                
                <h3 className="font-bold text-xl mb-3">{req.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {req.description}
                </p>
                
                <div className="flex gap-2 mb-6">
                  {req.tags && req.tags.map((tag: string, i: number) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs">
                      {req.author?.name ? req.author.name.substring(0, 2).toUpperCase() : 'U'}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{req.author?.name || 'Unknown User'}</p>
                      <p className="text-xs text-gray-500">{req.helpers?.length || 0} helpers interested</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/requests/${req._id}`} className="btn-secondary text-sm px-4 py-2">View details</Link>
                    <Link href={`/requests/${req._id}`} className="btn-primary text-sm px-4 py-2">I can help</Link>
                  </div>
                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}
