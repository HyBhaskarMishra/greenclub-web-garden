
import { Link } from 'react-router-dom';

const Recruitment = () => {
  return (
    <div className="font-inter bg-slate-900 text-slate-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-800/90 backdrop-blur-md shadow-lg z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">GC</span>
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-slate-100">GreenClub</h1>
                <p className="text-xs text-slate-400">MNNIT Allahabad</p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/recruitment" className="nav-link active">Recruitment</Link>
                <Link to="/socials" className="nav-link">Socials</Link>
                <Link to="/feedback" className="nav-link">Feedback</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-dark-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                 alt="Join GreenClub" 
                 className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl mb-8"/>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
              Join <span className="text-green-400">GreenClub</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Be part of the change you want to see. Join our passionate team working towards a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Our <span className="text-green-400">Teams</span>
            </h2>
            <p className="text-xl text-slate-300">Discover where your passion can make the biggest impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Team */}
            <div className="team-card">
              <div className="team-icon">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Core Team</h3>
              <p className="text-slate-300 mb-6">Lead strategic initiatives, organize events, and coordinate with different teams to drive our mission forward.</p>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-100 mb-2">Requirements:</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Leadership experience</li>
                  <li>• Strong communication skills</li>
                  <li>• Passion for environmental causes</li>
                  <li>• Event management experience (preferred)</li>
                </ul>
              </div>
              <button className="btn-primary w-full">Apply Now</button>
            </div>

            {/* Web Team */}
            <div className="team-card">
              <div className="team-icon">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Web Team</h3>
              <p className="text-slate-300 mb-6">Develop and maintain our digital platforms, create interactive tools for environmental awareness.</p>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-100 mb-2">Requirements:</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• HTML, CSS, JavaScript knowledge</li>
                  <li>• React/Node.js experience (preferred)</li>
                  <li>• UI/UX design skills</li>
                  <li>• Problem-solving mindset</li>
                </ul>
              </div>
              <button className="btn-primary w-full">Apply Now</button>
            </div>

            {/* Social Media Team */}
            <div className="team-card">
              <div className="team-icon">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Social Media</h3>
              <p className="text-slate-300 mb-6">Create engaging content, manage our social presence, and spread environmental awareness online.</p>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-100 mb-2">Requirements:</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Content creation skills</li>
                  <li>• Social media knowledge</li>
                  <li>• Photography/videography skills</li>
                  <li>• Creative thinking</li>
                </ul>
              </div>
              <button className="btn-primary w-full">Apply Now</button>
            </div>

            {/* Research Team */}
            <div className="team-card">
              <div className="team-icon">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Research Team</h3>
              <p className="text-slate-300 mb-6">Conduct environmental research, analyze data, and develop evidence-based sustainability solutions.</p>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-100 mb-2">Requirements:</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Strong analytical skills</li>
                  <li>• Research methodology knowledge</li>
                  <li>• Data analysis skills</li>
                  <li>• Environmental science background</li>
                </ul>
              </div>
              <button className="btn-primary w-full">Apply Now</button>
            </div>

            {/* Outreach Team */}
            <div className="team-card">
              <div className="team-icon">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Outreach Team</h3>
              <p className="text-slate-300 mb-6">Connect with local communities, organize awareness campaigns, and build partnerships.</p>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-100 mb-2">Requirements:</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Excellent communication skills</li>
                  <li>• Community engagement experience</li>
                  <li>• Networking abilities</li>
                  <li>• Local language proficiency</li>
                </ul>
              </div>
              <button className="btn-primary w-full">Apply Now</button>
            </div>

            {/* Design Team */}
            <div className="team-card">
              <div className="team-icon">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Design Team</h3>
              <p className="text-slate-300 mb-6">Create visual content, design promotional materials, and maintain our brand identity.</p>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-100 mb-2">Requirements:</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Adobe Creative Suite skills</li>
                  <li>• Graphic design experience</li>
                  <li>• Creative portfolio</li>
                  <li>• Brand design understanding</li>
                </ul>
              </div>
              <button className="btn-primary w-full">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a <span className="text-green-200">Difference?</span>
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join our mission to create a sustainable future. Every action counts, every member matters.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors w-full md:w-auto">
              Start Application
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors w-full md:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">GC</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">GreenClub</h3>
                  <p className="text-sm text-slate-400">MNNIT Allahabad</p>
                </div>
              </div>
              <p className="text-slate-400">Building a sustainable future, one initiative at a time.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-400 hover:text-slate-100">Home</Link></li>
                <li><Link to="/recruitment" className="text-slate-400 hover:text-slate-100">Recruitment</Link></li>
                <li><Link to="/socials" className="text-slate-400 hover:text-slate-100">Socials</Link></li>
                <li><Link to="/feedback" className="text-slate-400 hover:text-slate-100">Feedback</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>MNNIT Allahabad</li>
                <li>Teliarganj, Prayagraj</li>
                <li>greenclub@mnnit.ac.in</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">&copy; 2024 GreenClub MNNIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Recruitment;
