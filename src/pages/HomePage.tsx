import { Search, MapPin, Book, Star, CheckCircle, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { popularSubjects, mockTutors } from '../lib/mock-data';

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                #1 Trusted Tutor Marketplace in Nepal
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Find Trusted Home Tutors <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Anywhere in Nepal</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Connect with verified, highly-qualified tutors for home or online classes. From SEE preparation to IELTS, we have the right teacher for you.
              </p>
            </motion.div>

            {/* Search Box */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-3 rounded-2xl shadow-xl border border-gray-100 max-w-3xl mx-auto flex flex-col md:flex-row gap-3"
            >
              <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <Book className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Subject or Class (e.g., SEE Math)" 
                  className="bg-transparent border-none outline-none w-full text-gray-700 placeholder-gray-400"
                />
              </div>
              <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Location (e.g., Baneshwor)" 
                  className="bg-transparent border-none outline-none w-full text-gray-700 placeholder-gray-400"
                />
              </div>
              <button className="bg-primary hover:bg-primary-light text-white rounded-xl px-8 py-3 font-medium transition-colors flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-2 items-center text-sm text-gray-500"
            >
              <span className="font-medium mr-2">Popular:</span>
              {popularSubjects.slice(0, 4).map(sub => (
                <span key={sub} className="px-3 py-1 bg-white border border-gray-200 rounded-full cursor-pointer hover:border-primary hover:text-primary transition-colors">
                  {sub}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Tutors', value: '1,200+' },
              { label: 'Happy Students', value: '5,000+' },
              { label: 'Classes Conducted', value: '25,000+' },
              { label: 'Average Rating', value: '4.8/5' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600">Finding the perfect tutor is simple and fast. Follow our 3-step process to start learning.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 -z-10"></div>
            
            {[
              { icon: Search, title: '1. Search for Tutors', desc: 'Browse profiles by subject, location, and class.' },
              { icon: Users, title: '2. Contact & Book', desc: 'Message tutors directly or request a demo class.' },
              { icon: CheckCircle, title: '3. Start Learning', desc: 'Begin your classes online or at your home.' },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="w-20 h-20 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-6 ring-8 ring-white">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Featured Tutors</h2>
              <p className="text-gray-600 max-w-2xl">Top-rated educators ready to help you achieve your academic goals.</p>
            </div>
            <Link to="/tutors" className="hidden md:inline-flex font-medium text-primary hover:text-primary-light transition-colors">
              View All Tutors &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockTutors.slice(0, 4).map((tutor) => (
              <div key={tutor.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="p-6 relative">
                  <img src={tutor.photo} alt={tutor.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mx-auto mb-4" />
                  {tutor.isVerified && (
                    <div className="absolute top-6 right-6 text-accent bg-emerald-50 p-1.5 rounded-full" title="Verified Tutor">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  )}
                  <h3 className="text-xl font-display font-semibold text-center text-gray-900 mb-1 group-hover:text-primary transition-colors">{tutor.name}</h3>
                  <p className="text-sm text-center text-gray-500 mb-4">{tutor.qualification}</p>
                  
                  <div className="flex justify-center items-center gap-1 mb-4">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-gray-900">{tutor.rating}</span>
                    <span className="text-gray-400 text-sm">({tutor.reviews})</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-start text-sm text-gray-600">
                      <Book className="w-4 h-4 mr-2 text-gray-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{tutor.subjects.join(', ')}</span>
                    </div>
                    <div className="flex items-start text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400 shrink-0 mt-0.5" />
                      <span>{tutor.location}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/tutors/${tutor.id}`}
                    className="block w-full py-2.5 bg-gray-50 text-center rounded-xl font-medium text-gray-900 hover:bg-primary hover:text-white transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/tutors" className="inline-flex font-medium text-primary">
              View All Tutors &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 flex text-white -rotate-12 scale-150 select-none">
           <div className="text-[20rem] font-bold leading-none translate-x-20">TEACH</div>
           <div className="text-[20rem] font-bold leading-none text-outline px-10">LEARN</div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Are you a qualified teacher?</h2>
          <p className="text-xl text-gray-300 mb-10">Join Nepal's fastest-growing tuition network and start earning by teaching students in your area or online.</p>
          <Link to="/become-tutor" className="inline-block bg-accent hover:bg-accent-dark text-white rounded-full px-10 py-4 font-bold text-lg transition-all shadow-lg shadow-accent/20 hover:scale-105 active:scale-95">
            Register as a Tutor Today
          </Link>
        </div>
      </section>
    </div>
  );
}
