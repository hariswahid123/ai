"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [role, setRole] = useState("Both");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // First try to login
      let res;
      if (name.trim().length > 0) {
        // If they provided a name, they want to sign up
        try {
          res = await axios.post("http://localhost:5000/api/auth/signup", {
            name,
            email,
            password,
            role,
            location: "Unknown",
            skills: []
          });
        } catch (err: any) {
          alert(err.response?.data?.error || "Signup failed!");
          return;
        }
      } else {
        // If no name, they just want to login
        try {
          res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
        } catch (err: any) {
          alert("Invalid credentials! If you want to sign up, please enter your Name.");
          return;
        }
      }
      
      // Save to localStorage
      localStorage.setItem("helplytics_user", JSON.stringify(res.data));
      router.push("/dashboard");
    } catch (error) {
      console.error("Auth error", error);
      alert("Failed to authenticate");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-12">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Left side info */}
        <div className="dark-card p-12 flex flex-col justify-center">
          <p className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-4">
            Community Access
          </p>
          <h1 className="text-5xl font-bold mb-6">
            Enter the support network.
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Choose a demo identity, set your role, and jump into a multi-page product flow designed for asking, offering, and tracking help with a premium interface.
          </p>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
              Role-based entry for Need Help, Can Help, or Both
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
              Direct path into dashboard, requests, AI Center, and community feed
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
              Persistent demo session powered by MongoDB
            </li>
          </ul>
        </div>

        {/* Right side form */}
        <div className="glass-card p-12 flex flex-col justify-center">
          <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-4">
            Login / Signup
          </p>
          <h2 className="text-3xl font-bold mb-8">
            Authenticate your community profile
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name (Leave blank for login)</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role selection</label>
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option>Both</option>
                <option>Need Help</option>
                <option>Can Help</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary py-3 text-lg mt-4">
              Continue to dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
