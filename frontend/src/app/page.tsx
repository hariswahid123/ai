import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24 mt-12">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-4">
              Helplytics Grand Coding Night 2026
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Find help faster.<br />
              Become help that matters.
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
            Helplytics AI is a community-powered support network for students, mentors, creators, and builders. Ask for help, offer help, track impact, and let AI surface smarter matches across the platform.
          </p>
          <div className="flex gap-4">
            <Link href="/login" className="btn-primary">
              Open product demo
            </Link>
            <Link href="/explore" className="btn-secondary">
              Post a request
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="glass-card p-6">
              <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Members</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">384+</p>
              <p className="text-sm text-gray-500">Students, mentors, and helpers in the loop.</p>
            </div>
            <div className="glass-card p-6">
              <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Requests</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">72+</p>
              <p className="text-sm text-gray-500">Support posts shared across learning journeys.</p>
            </div>
            <div className="glass-card p-6">
              <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Solved</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">69+</p>
              <p className="text-sm text-gray-500">Problems resolved through fast community action.</p>
            </div>
          </div>
        </div>

        <div className="dark-card p-10 h-full flex flex-col relative">
          <div className="absolute top-8 right-8 w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-50"></div>
          <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-400 rounded-full"></div>
          
          <p className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-4">
            Live Product Feel
          </p>
          <h2 className="text-4xl font-bold mb-6">
            More than a form.<br />
            More like an<br />
            ecosystem.
          </h2>
          <p className="text-gray-300 mb-10 max-w-sm">
            A polished multi-page experience inspired by product platforms, with AI summaries, trust scores, contribution signals, and leaderboard momentum.
          </p>

          <div className="space-y-4 mt-auto">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-semibold mb-2">AI request intelligence</h3>
              <p className="text-sm text-gray-300">Auto-categorization, urgency detection, tags, rewrite suggestions, and trend snapshots.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-semibold mb-2">Community trust graph</h3>
              <p className="text-sm text-gray-300">Badges, helper rankings, trust score boosts, and visible contribution history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Flow */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-2">Core Flow</p>
            <h2 className="text-3xl font-bold">From struggling alone to solving together</h2>
          </div>
          <Link href="/login" className="btn-secondary text-sm">Try onboarding AI</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-8">
            <h3 className="font-bold text-lg mb-3">Ask for help clearly</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Create structured requests with category, urgency, AI suggestions, and tags that attract the right people.</p>
          </div>
          <div className="glass-card p-8">
            <h3 className="font-bold text-lg mb-3">Discover the right people</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Use the explore feed, helper lists, notifications, and messaging to move quickly once a match happens.</p>
          </div>
          <div className="glass-card p-8">
            <h3 className="font-bold text-lg mb-3">Track real contribution</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Trust scores, badges, solved requests, and rankings help the community recognize meaningful support.</p>
          </div>
        </div>
      </section>

      {/* Featured Requests */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-2">Featured Requests</p>
            <h2 className="text-3xl font-bold">Community problems currently in motion</h2>
          </div>
          <Link href="/explore" className="btn-secondary text-sm">View full feed</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Mock Request 1 */}
          <div className="glass-card p-6 flex flex-col">
            <div className="flex gap-2 mb-4">
              <span className="badge badge-gray">Web Development</span>
              <span className="badge badge-red">High</span>
              <span className="badge badge-green">Solved</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Need help</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">help needed</p>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
              <div>
                <p className="font-medium text-sm">Ayesha Khan</p>
                <p className="text-xs text-gray-500">Karachi • 1 helper interested</p>
              </div>
              <button className="btn-secondary text-xs px-4 py-1.5">Open details</button>
            </div>
          </div>

          {/* Mock Request 2 */}
          <div className="glass-card p-6 flex flex-col">
            <div className="flex gap-2 mb-4">
              <span className="badge badge-gray">Web Development</span>
              <span className="badge badge-red">High</span>
              <span className="badge badge-green">Solved</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Need help making my portfolio responsive before demo day</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.</p>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
              <div>
                <p className="font-medium text-sm">Sara Noor</p>
                <p className="text-xs text-gray-500">Karachi • 1 helper interested</p>
              </div>
              <button className="btn-secondary text-xs px-4 py-1.5">Open details</button>
            </div>
          </div>

          {/* Mock Request 3 */}
          <div className="glass-card p-6 flex flex-col">
            <div className="flex gap-2 mb-4">
              <span className="badge badge-gray">Design</span>
              <span className="badge badge-gray">Medium</span>
              <span className="badge bg-blue-100 text-blue-800">Open</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Looking for Figma feedback on a volunteer event poster</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.</p>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
              <div>
                <p className="font-medium text-sm">Ayesha Khan</p>
                <p className="text-xs text-gray-500">Lahore • 1 helper interested</p>
              </div>
              <button className="btn-secondary text-xs px-4 py-1.5">Open details</button>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="pt-12 pb-8 text-center text-sm text-gray-500">
        Helplytics AI is built as a premium-feel, multi-page community support product using Next.js, Tailwind CSS, Express, and MongoDB.
      </footer>
    </div>
  );
}
