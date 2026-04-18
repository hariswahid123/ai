"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function RequestDetail() {
  const params = useParams();
  const router = useRouter();
  const [request, setRequest] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // Get logged in user
    const userStr = localStorage.getItem("helplytics_user");
    if (userStr) setCurrentUser(JSON.parse(userStr));

    // Fetch request details
    const fetchRequest = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/requests/${params.id}`);
        setRequest(res.data);
      } catch (error) {
        console.error("Failed to fetch request", error);
      }
      setLoading(false);
    };
    
    if (params.id) fetchRequest();
  }, [params.id]);

  const handleMarkAsSolved = async () => {
    try {
      await axios.put(`http://localhost:5000/api/requests/${params.id}`, { status: "Solved" });
      setRequest({ ...request, status: "Solved" });
      alert("Request marked as solved!");
    } catch (error) {
      alert("Failed to update status.");
    }
  };

  const handleICanHelp = async () => {
    if (!currentUser) return alert("Please login first!");
    try {
      // Add current user to helpers array
      const updatedHelpers = [...(request.helpers || []), currentUser._id];
      await axios.put(`http://localhost:5000/api/requests/${params.id}`, { helpers: updatedHelpers });
      
      // Send automated message
      await axios.post(`http://localhost:5000/api/messages`, {
        sender: currentUser._id,
        receiver: request.author._id,
        content: `Hi ${request.author.name}, I can help you with your request: "${request.title}"`,
        requestId: request._id
      });

      alert("Awesome! We notified the author that you can help.");
      router.push("/messages");
    } catch (error) {
      alert("Something went wrong.");
    }
  };

  if (loading) return <div className="pt-20 text-center">Loading...</div>;
  if (!request) return <div className="pt-20 text-center">Request not found.</div>;

  const isAuthor = currentUser && currentUser._id === request.author?._id;

  return (
    <div className="max-w-4xl mx-auto pt-12 space-y-8">
      <div className="glass-card p-10">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-2">
            <span className="badge badge-gray border border-gray-200">{request.category}</span>
            <span className={`badge border ${request.urgency === 'High' ? 'badge-red border-red-100' : 'badge-gray border-gray-200'}`}>
              Urgency: {request.urgency}
            </span>
            <span className={`badge border ${request.status === 'Solved' ? 'badge-green border-green-200' : 'bg-blue-100 text-blue-800 border-blue-200'}`}>
              {request.status}
            </span>
          </div>
          <span className="text-sm text-gray-500">{new Date(request.createdAt).toLocaleDateString()}</span>
        </div>

        <h1 className="text-4xl font-bold mb-6">{request.title}</h1>
        
        <div className="bg-white p-6 rounded-xl border border-gray-100 mb-8 shadow-sm">
          <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">{request.description}</p>
        </div>

        <div className="flex gap-2 mb-10">
          <span className="text-sm font-bold text-gray-500 mr-2">Tags:</span>
          {request.tags?.map((tag: string, i: number) => (
            <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg">
              {request.author?.name ? request.author.name.substring(0, 2).toUpperCase() : 'U'}
            </div>
            <div>
              <p className="font-bold text-gray-900">{request.author?.name || 'Unknown'}</p>
              <p className="text-sm text-gray-500">Trust Score: {request.author?.trustScore || 100}%</p>
            </div>
          </div>

          <div className="flex gap-4">
            {isAuthor ? (
              request.status !== "Solved" && (
                <button onClick={handleMarkAsSolved} className="btn-secondary">
                  Mark as Solved
                </button>
              )
            ) : (
              request.status !== "Solved" && (
                <button onClick={handleICanHelp} className="btn-primary">
                  I can help
                </button>
              )
            )}
            <Link href="/explore" className="text-gray-500 hover:text-gray-900 px-4 py-2 font-medium">
              Back to feed
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
