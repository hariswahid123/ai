"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreateRequest() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Other");
  const [urgency, setUrgency] = useState("Medium");
  const [tags, setTags] = useState<string[]>([]);
  
  // AI Suggestions state
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<any>(null);

  // Analyze text when user stops typing for 1 second
  useEffect(() => {
    if (title.length > 5 || description.length > 10) {
      const timer = setTimeout(async () => {
        setAiLoading(true);
        try {
          const res = await axios.post("http://localhost:5000/api/ai/analyze-request", { title, description });
          setAiSuggestions(res.data);
        } catch (error) {
          console.error("AI Error:", error);
        }
        setAiLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [title, description]);

  const applySuggestions = () => {
    if (aiSuggestions) {
      setCategory(aiSuggestions.suggestedCategory);
      setUrgency(aiSuggestions.suggestedUrgency);
      setTags(aiSuggestions.suggestedTags);
      if (aiSuggestions.rewrittenTitle && aiSuggestions.rewrittenTitle !== title) {
        setTitle(aiSuggestions.rewrittenTitle);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Get logged in user from localStorage
      const userStr = localStorage.getItem("helplytics_user");
      if (!userStr) {
        alert("Please login first!");
        router.push("/login");
        return;
      }
      const user = JSON.parse(userStr);

      await axios.post("http://localhost:5000/api/requests", {
        title,
        description,
        category,
        urgency,
        tags,
        author: user._id
      });
      
      router.push("/explore");
    } catch (error) {
      console.error("Error creating request:", error);
      alert("Failed to create request");
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-12">
      <h1 className="text-4xl font-bold mb-2">Post a new request</h1>
      <p className="text-gray-600 mb-8">Ask for help clearly so the community can assist you.</p>

      <div className="grid md:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6 glass-card p-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Need help making my portfolio responsive"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explain the problem you are facing..."
              rows={6}
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-3 bg-white"
              >
                <option>Web Development</option>
                <option>Design</option>
                <option>Career</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
              <select 
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-3 bg-white"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags (Comma separated)</label>
            <input 
              type="text" 
              value={tags.join(", ")}
              onChange={(e) => setTags(e.target.value.split(",").map(t => t.trim()))}
              placeholder="React, CSS, Figma..."
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button type="submit" className="w-full btn-primary py-3">
            Post Request to Community
          </button>
        </form>

        {/* AI Side Panel */}
        <div className="dark-card p-6 h-fit sticky top-8">
          <p className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-4">
            AI Assistant
          </p>
          <h2 className="text-xl font-bold mb-4">Request Intelligence</h2>
          
          {aiLoading ? (
            <p className="text-gray-400 animate-pulse text-sm">Analyzing your text...</p>
          ) : aiSuggestions ? (
            <div className="space-y-4">
              <p className="text-sm text-gray-300">Based on what you wrote, here is what AI suggests:</p>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Category</p>
                <p className="font-semibold">{aiSuggestions.suggestedCategory}</p>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Urgency</p>
                <p className="font-semibold text-yellow-400">{aiSuggestions.suggestedUrgency}</p>
              </div>

              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-xs text-gray-400 mb-2">Suggested Tags</p>
                <div className="flex flex-wrap gap-2">
                  {aiSuggestions.suggestedTags.map((t: string) => (
                    <span key={t} className="text-xs bg-teal-900 text-teal-100 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>

              <button 
                onClick={applySuggestions}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-lg text-sm transition-colors mt-4"
              >
                Apply AI Suggestions
              </button>
            </div>
          ) : (
            <p className="text-gray-400 text-sm">Start typing a title and description. AI will automatically analyze your text and suggest categories and tags.</p>
          )}
        </div>
      </div>
    </div>
  );
}
