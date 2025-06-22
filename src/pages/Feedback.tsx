
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Feedback = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  const closeThankYou = () => {
    setShowThankYou(false);
    setRating(0);
  };

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
                <Link to="/socials" className="nav-link">Socials</Link>
                <Link to="/feedback" className="nav-link active">Feedback</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-dark-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
            Your Voice <span className="text-green-400">Matters</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Help us improve and grow by sharing your thoughts, suggestions, and experiences with GreenClub
          </p>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-700 rounded-3xl p-8 md:p-12 border border-slate-600">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-100 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800 text-slate-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-100 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800 text-slate-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-100 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800 text-slate-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role" className="block text-sm font-semibold text-slate-100 mb-2">You are a *</label>
                  <select 
                    id="role" 
                    name="role" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800 text-slate-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your role</option>
                    <option value="student">MNNIT Student</option>
                    <option value="member">GreenClub Member</option>
                    <option value="faculty">Faculty</option>
                    <option value="alumni">Alumni</option>
                    <option value="visitor">Visitor</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="category" className="block text-sm font-semibold text-slate-100 mb-2">Feedback Category *</label>
                <select 
                  id="category" 
                  name="category" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800 text-slate-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">Select category</option>
                  <option value="general">General Feedback</option>
                  <option value="events">Events & Activities</option>
                  <option value="website">Website Experience</option>
                  <option value="suggestions">Suggestions for Improvement</option>
                  <option value="collaboration">Collaboration Opportunities</option>
                  <option value="complaint">Complaint</option>
                  <option value="appreciation">Appreciation</option>
                </select>
              </div>

              <div className="form-group">
                <label className="block text-sm font-semibold text-slate-100 mb-2">Overall Rating *</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`text-3xl transition-colors ${
                        star <= (hoveredRating || rating) ? 'text-yellow-400' : 'text-slate-500'
                      }`}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                    >
                      ⭐
                    </button>
                  ))}
                </div>
                <p className="text-sm text-slate-400 mt-2">Click to rate your experience</p>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-100 mb-2">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  required 
                  placeholder="Share your thoughts, suggestions, or feedback here..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800 text-slate-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="form-group">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="subscribe" 
                    name="subscribe" 
                    className="rounded text-green-600 focus:ring-green-500 bg-slate-800 border-slate-600"
                  />
                  <span className="ml-3 text-sm text-slate-300">I'd like to receive updates about GreenClub activities</span>
                </label>
              </div>

              <div className="text-center">
                <button type="submit" className="btn-primary px-12 py-4 text-lg">
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Other Ways to <span className="text-green-400">Reach Us</span>
            </h2>
            <p className="text-lg text-slate-300">We're always here to listen and help</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 text-center border border-slate-700">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Email Us</h3>
              <p className="text-slate-300 mb-4">Send us a detailed message</p>
              <a href="mailto:greenclub@mnnit.ac.in" className="text-green-400 font-semibold hover:text-green-300">
                greenclub@mnnit.ac.in
              </a>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center border border-slate-700">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏫</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Visit Us</h3>
              <p className="text-slate-300 mb-4">Drop by our office on campus</p>
              <p className="text-green-400 font-semibold">
                Student Activity Center<br/>
                MNNIT Allahabad
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center border border-slate-700">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Chat With Us</h3>
              <p className="text-slate-300 mb-4">Join our WhatsApp group</p>
              <a href="#" className="text-green-400 font-semibold hover:text-green-300">
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md mx-4 text-center border border-slate-600">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-100 text-2xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Thank You!</h3>
            <p className="text-slate-300 mb-6">Your feedback has been submitted successfully. We appreciate your input and will get back to you soon.</p>
            <button onClick={closeThankYou} className="btn-primary">
              Close
            </button>
          </div>
        </div>
      )}

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

export default Feedback;
