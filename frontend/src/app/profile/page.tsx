export default function Profile() {
  return (
    <div className="space-y-10 pt-8">
      {/* Header Card */}
      <div className="dark-card p-10 md:p-14">
        <p className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-4">
          Profile
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Ayesha Khan
        </h1>
        <p className="text-gray-300">
          Both • Karachi
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Public Profile */}
        <div className="glass-card p-8">
          <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-4">Public Profile</p>
          <h2 className="text-3xl font-bold mb-8">Skills and reputation</h2>

          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-gray-600">Trust score</span>
              <span className="font-bold text-gray-900">100%</span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-gray-600">Contributions</span>
              <span className="font-bold text-gray-900">35</span>
            </div>

            <div>
              <h3 className="font-bold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-green border border-green-200">Figma</span>
                <span className="badge badge-green border border-green-200">UI/UX</span>
                <span className="badge badge-green border border-green-200">HTML/CSS</span>
                <span className="badge badge-green border border-green-200">Career Guidance</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3">Badges</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-green border border-green-200">Design Ally</span>
                <span className="badge badge-green border border-green-200">Fast Responder</span>
                <span className="badge badge-green border border-green-200">Top Mentor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile */}
        <div className="glass-card p-8">
          <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-4">Edit Profile</p>
          <h2 className="text-3xl font-bold mb-8">Update your identity</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  defaultValue="Ayesha Khan"
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input 
                  type="text" 
                  defaultValue="Karachi"
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
              <input 
                type="text" 
                defaultValue="Figma, UI/UX, HTML/CSS, Career Guidance"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
              <input 
                type="text" 
                defaultValue="Hackathons, UI/UX, Community Building"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button type="submit" className="w-full btn-primary py-3 mt-4">
              Save profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
