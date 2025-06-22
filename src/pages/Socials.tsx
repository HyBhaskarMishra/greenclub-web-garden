
import { Link } from 'react-router-dom';

const Socials = () => {
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
                <Link to="/recruitment" className="nav-link">Recruitment</Link>
                <Link to="/socials" className="nav-link active">Socials</Link>
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
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
              Stay <span className="text-green-400">Connected</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Follow our journey, join our community, and be part of the green revolution at MNNIT.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Find Us <span class="text-green-400">Online</span>
            </h2>
            <p class="text-xl text-slate-300">Join our community on various platforms</p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="social-card">
              <div class="team-icon bg-blue-600">
                <span class="text-3xl">📘</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-100 mb-4">Facebook</h3>
              <p class="text-slate-300 mb-6">Stay updated with our latest events, initiatives, and environmental tips.</p>
              <div class="mb-6">
                <p class="text-green-400 font-semibold">1.2K Followers</p>
              </div>
              <button class="btn-primary w-full">Follow Us</button>
            </div>

            <div class="social-card">
              <div class="team-icon bg-pink-600">
                <span class="text-3xl">📷</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-100 mb-4">Instagram</h3>
              <p class="text-slate-300 mb-6">See behind-the-scenes content, beautiful nature photography, and our team in action.</p>
              <div class="mb-6">
                <p class="text-green-400 font-semibold">800 Followers</p>
              </div>
              <button class="btn-primary w-full">Follow Us</button>
            </div>

            <div class="social-card">
              <div class="team-icon bg-blue-400">
                <span class="text-3xl">🐦</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-100 mb-4">Twitter</h3>
              <p class="text-slate-300 mb-6">Get real-time updates, environmental news, and quick tips for sustainable living.</p>
              <div class="mb-6">
                <p class="text-green-400 font-semibold">500 Followers</p>
              </div>
              <button class="btn-primary w-full">Follow Us</button>
            </div>

            <div class="social-card">
              <div class="team-icon bg-green-600">
                <span class="text-3xl">💬</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-100 mb-4">WhatsApp</h3>
              <p class="text-slate-300 mb-6">Join our community group for instant updates and discussions about green initiatives.</p>
              <div class="mb-6">
                <p class="text-green-400 font-semibold">200+ Members</p>
              </div>
              <button class="btn-primary w-full">Join Group</button>
            </div>

            <div class="social-card">
              <div class="team-icon bg-red-600">
                <span class="text-3xl">📺</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-100 mb-4">YouTube</h3>
              <p class="text-slate-300 mb-6">Watch our educational videos, event highlights, and environmental documentaries.</p>
              <div class="mb-6">
                <p class="text-green-400 font-semibold">300 Subscribers</p>
              </div>
              <button class="btn-primary w-full">Subscribe</button>
            </div>

            <div class="social-card">
              <div class="team-icon bg-blue-700">
                <span class="text-3xl">💼</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-100 mb-4">LinkedIn</h3>
              <p class="text-slate-300 mb-6">Connect with our professional network and career opportunities in sustainability.</p>
              <div class="mb-6">
                <p class="text-green-400 font-semibold">150 Connections</p>
              </div>
              <button class="btn-primary w-full">Connect</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Stay <span className="text-green-400">Informed</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Subscribe to our newsletter for weekly updates on environmental initiatives and events.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-full border-2 border-green-500 bg-slate-800 text-slate-100 focus:outline-none focus:border-green-400"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-r-full font-semibold transition-colors">
              Subscribe
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

export default Socials;
