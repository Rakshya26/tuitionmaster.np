import { useState } from 'react';
import { Search, MapPin, Filter, Star, CheckCircle, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockTutors, popularSubjects } from '../lib/mock-data';

export function FindTutorsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTutors = mockTutors.filter(tutor => 
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.subjects.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Find Home Tutors</h1>
          <p className="text-gray-600">Browse through our verified professionals and find the perfect match for your needs.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <div className="flex items-center gap-2 font-display font-bold text-lg mb-6 pb-4 border-b border-gray-100">
                <Filter className="w-5 h-5 text-primary" />
                Filters
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Teaching Mode</label>
                  <div className="space-y-2">
                    {['Home Tuition', 'Online Classes', 'At Tutor\'s Place'].map(mode => (
                      <label key={mode} className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary/20 accent-primary" />
                        <span className="text-sm text-gray-600">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Subject Category</label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {popularSubjects.map(sub => (
                      <label key={sub} className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary/20 accent-primary" />
                        <span className="text-sm text-gray-600">{sub}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Hourly Rate Range</label>
                  <input type="range" min="200" max="2000" className="w-full accent-primary" />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Rs. 200</span>
                    <span>Rs. 2000+</span>
                  </div>
                </div>

                <button className="w-full bg-primary/10 text-primary hover:bg-primary/20 font-medium py-2.5 rounded-xl transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {/* Search Top Bar */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-200 mb-6 flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-2.5">
                <Search className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search by name, subject, or skills..." 
                  className="bg-transparent border-none outline-none w-full text-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-2.5">
                <MapPin className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Location (e.g. Kathmandu)" 
                  className="bg-transparent border-none outline-none w-full text-gray-700"
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredTutors.map((tutor) => (
                <div key={tutor.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <img src={tutor.photo} alt={tutor.name} className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-display font-semibold text-lg text-gray-900 flex items-center gap-1.5">
                            {tutor.name}
                            {tutor.isVerified && <CheckCircle className="w-4 h-4 text-accent" />}
                          </h3>
                          <p className="text-sm text-gray-500">{tutor.qualification}</p>
                        </div>
                        <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-xs text-amber-900">{tutor.rating}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 space-y-1.5">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-gray-400 shrink-0" />
                          <span className="line-clamp-1">{tutor.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Book className="w-4 h-4 mr-2 text-gray-400 shrink-0" />
                          <span className="line-clamp-1">{tutor.subjects.slice(0,2).join(', ')} {tutor.subjects.length > 2 && `+${tutor.subjects.length - 2}`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500 block uppercase font-bold tracking-wider mb-0.5">FEE</span>
                      <span className="font-bold text-gray-900">{tutor.hourlyFee}</span>
                    </div>
                    <Link 
                      to={`/tutors/${tutor.id}`}
                      className="bg-primary hover:bg-primary-light px-5 py-2 rounded-xl text-white font-medium text-sm transition-colors"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredTutors.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No tutors found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
