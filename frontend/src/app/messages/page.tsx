import Link from "next/link";

export default function Messages() {
  return (
    <div className="space-y-10 pt-8">
      {/* Header Card */}
      <div className="dark-card p-10 md:p-14">
        <p className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-4">
          Interaction / Messaging
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
          Keep support moving through direct communication.
        </h1>
        <p className="text-gray-300 text-lg">
          Basic messaging gives helpers and requesters a clear follow-up path once a match happens.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Conversation Stream */}
        <div className="md:col-span-2 glass-card p-8">
          <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-4">Conversation Stream</p>
          <h2 className="text-3xl font-bold mb-8">Recent messages</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 p-6 flex justify-between items-start shadow-sm">
              <div>
                <h3 className="font-bold text-sm mb-2">Ayesha Khan &rarr; Sara Noor</h3>
                <p className="text-gray-600 text-sm">I checked your portfolio request. Share the breakpoint screenshots and I can suggest fixes.</p>
              </div>
              <div className="bg-teal-50 text-teal-800 text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                09:45 AM
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 flex justify-between items-start shadow-sm">
              <div>
                <h3 className="font-bold text-sm mb-2">Hassan Ali &rarr; Ayesha Khan</h3>
                <p className="text-gray-600 text-sm">Your event poster concept is solid. I would tighten the CTA and reduce the background texture.</p>
              </div>
              <div className="bg-teal-50 text-teal-800 text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                11:10 AM
              </div>
            </div>
          </div>
        </div>

        {/* Send Message Form */}
        <div className="glass-card p-8 h-fit">
          <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-4">Send Message</p>
          <h2 className="text-3xl font-bold mb-8">Start a conversation</h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <select className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Ayesha Khan</option>
                <option>Sara Noor</option>
                <option>Hassan Ali</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows={4}
                placeholder="Share support details, ask for files, or suggest next steps."
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full btn-primary py-3 mt-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
