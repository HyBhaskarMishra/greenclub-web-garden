
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
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
                <p className="text-xs text-slate-300">MNNIT Allahabad</p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="nav-link active">Home</Link>
                <Link to="/recruitment" className="nav-link">Recruitment</Link>
                <Link to="/socials" className="nav-link">Socials</Link>
                <Link to="/feedback" className="nav-link">Feedback</Link>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="mobile-menu-btn">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="mobile-menu md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 shadow-lg">
              <Link to="/" className="block px-3 py-2 text-green-400 font-medium">Home</Link>
              <Link to="/recruitment" className="block px-3 py-2 text-slate-300 hover:text-green-400">Recruitment</Link>
              <Link to="/socials" className="block px-3 py-2 text-slate-300 hover:text-green-400">Socials</Link>
              <Link to="/feedback" className="block px-3 py-2 text-slate-300 hover:text-green-400">Feedback</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-dark-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
              Building a <span className="text-green-400">Sustainable</span> Future
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Join GreenClub MNNIT in our mission to create environmental awareness and drive positive change in our campus and community.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link to="/recruitment" className="btn-primary">Join Our Mission</Link>
              <a href="#about" className="btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
                Who <span className="text-green-400">We Are</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                GreenClub MNNIT is a passionate community of students dedicated to environmental conservation and sustainability. We believe in the power of collective action to create meaningful change.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                Through innovative projects, awareness campaigns, and hands-on initiatives, we're working to make our campus and community more environmentally conscious and sustainable.
              </p>
              <Link to="/recruitment" className="btn-primary">Get Involved</Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                   alt="Nature and environment" 
                   className="w-full h-96 object-cover rounded-2xl shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Matter - Timeline Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Why We <span className="text-green-400">Matter</span>
            </h2>
            <p className="text-xl text-slate-300">Our journey towards a sustainable future</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="timeline-item">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-green-400 mb-2">2020 - Foundation</h3>
                <p className="text-slate-300">Established GreenClub with a vision to create environmental awareness in MNNIT campus.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-green-400 mb-2">2021 - First Initiatives</h3>
                <p className="text-slate-300">Launched campus-wide recycling programs and organized our first Earth Day celebration.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-green-400 mb-2">2022 - Community Outreach</h3>
                <p className="text-slate-300">Expanded our reach to local communities with tree plantation and awareness drives.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-green-400 mb-2">2023 - Innovation</h3>
                <p className="text-slate-300">Implemented smart waste management systems and launched our digital awareness platform.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-green-400 mb-2">2024 - Expansion</h3>
                <p className="text-slate-300">Partnered with other colleges and organizations to amplify our environmental impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Our <span className="text-green-400">Work</span>
            </h2>
            <p className="text-xl text-slate-300">Making a difference through action</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="work-card">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Tree Plantation" 
                   className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3">Tree Plantation Drive</h3>
                <p className="text-slate-300">Planted over 500 trees across campus and nearby areas, contributing to carbon offset goals.</p>
              </div>
            </div>
            
            <div className="work-card">
              <img src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Waste Management" 
                   className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3">Waste Management</h3>
                <p className="text-slate-300">Implemented smart recycling systems reducing campus waste by 40% in the first year.</p>
              </div>
            </div>
            
            <div className="work-card">
              <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Awareness Campaign" 
                   className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3">Awareness Campaigns</h3>
                <p className="text-slate-300">Organized workshops and seminars reaching over 2000 students about environmental issues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Our <span className="text-green-400">Achievements</span>
            </h2>
            <p className="text-xl text-slate-300">Measuring our impact on the environment</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="achievement-stat">
              <div className="text-4xl font-bold text-green-400 mb-2">42%</div>
              <div className="text-slate-100 font-semibold">Carbon Reduction</div>
            </div>
            <div className="achievement-stat">
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-slate-100 font-semibold">Trees Planted</div>
            </div>
            <div className="achievement-stat">
              <div className="text-4xl font-bold text-green-400 mb-2">2000+</div>
              <div className="text-slate-100 font-semibold">Students Reached</div>
            </div>
            <div className="achievement-stat">
              <div className="text-4xl font-bold text-green-400 mb-2">15</div>
              <div className="text-slate-100 font-semibold">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Store Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              <span className="text-green-400">Eco</span> Merch Store
            </h2>
            <p className="text-xl text-slate-300 mb-8">Support our cause with sustainable merchandise</p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👕</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-100">Eco T-Shirts</h3>
                <p className="text-slate-300">Made from organic cotton</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎒</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-100">Eco Bags</h3>
                <p className="text-slate-300">Reusable and biodegradable</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-100">Plant Kits</h3>
                <p className="text-slate-300">Grow your own herbs</p>
              </div>
            </div>
            
            <button className="btn-primary">Visit Store</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">GC</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">GreenClub</h3>
                  <p className="text-sm text-slate-300">MNNIT Allahabad</p>
                </div>
              </div>
              <p className="text-slate-300">Building a sustainable future, one initiative at a time.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-300 hover:text-slate-100">Home</Link></li>
                <li><Link to="/recruitment" className="text-slate-300 hover:text-slate-100">Recruitment</Link></li>
                <li><Link to="/socials" className="text-slate-300 hover:text-slate-100">Socials</Link></li>
                <li><Link to="/feedback" className="text-slate-300 hover:text-slate-100">Feedback</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-300">
                <li>MNNIT Allahabad</li>
                <li>Teliarganj, Prayagraj</li>
                <li>greenclub@mnnit.ac.in</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-slate-300">&copy; 2024 GreenClub MNNIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
