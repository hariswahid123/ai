import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-10 pt-8">
      {/* Header Card */}
      <div className="dark-card p-10 md:p-14">
        <p className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-4">
          AI Center
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
          See what the platform intelligence is noticing.
        </h1>
        <p className="text-gray-300 text-lg">
          AI-like insights summarize demand trends, helper readiness, urgency signals, and request recommendations.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-4">Trend Pulse</p>
          <h2 className="text-3xl font-bold mb-2">Web Development</h2>
          <p className="text-gray-600 text-sm">Most common support area based on active community requests.</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-4">Urgency Watch</p>
          <h2 className="text-3xl font-bold mb-2">2</h2>
          <p className="text-gray-600 text-sm">Requests currently flagged high priority by the urgency detector.</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-4">Mentor Pool</p>
          <h2 className="text-3xl font-bold mb-2">2</h2>
          <p className="text-gray-600 text-sm">Trusted helpers with strong response history and contribution signals.</p>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="glass-card p-8">
        <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-4">AI Recommendations</p>
        <h2 className="text-3xl font-bold mb-8">Requests needing attention</h2>

        <div className="space-y-4">
          {/* Item 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg">Need help</h3>
            <p className="text-gray-600 text-sm">AI summary: Web Development request with high urgency. Best suited for members with relevant expertise.</p>
            <div className="flex gap-2">
              <span className="badge badge-gray border border-gray-200">Web Development</span>
              <span className="badge badge-gray border border-gray-200">High</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg">Need help making my portfolio responsive before demo day</h3>
            <p className="text-gray-600 text-sm">Responsive layout issue with a short deadline. Best helpers are frontend mentors comfortable with CSS grids and media queries.</p>
            <div className="flex gap-2">
              <span className="badge badge-gray border border-gray-200">Web Development</span>
              <span className="badge badge-gray border border-gray-200">High</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg">Looking for Figma feedback on a volunteer event poster</h3>
            <p className="text-gray-600 text-sm">A visual design critique request where feedback on hierarchy, spacing, and messaging would create the most value.</p>
            <div className="flex gap-2">
              <span className="badge badge-gray border border-gray-200">Design</span>
              <span className="badge badge-gray border border-gray-200">Medium</span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg">Need mock interview support for internship applications</h3>
            <p className="text-gray-600 text-sm">Career coaching request focused on confidence-building, behavioral answers, and entry-level frontend interviews.</p>
            <div className="flex gap-2">
              <span className="badge badge-gray border border-gray-200">Career</span>
              <span className="badge badge-gray border border-gray-200">Low</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
