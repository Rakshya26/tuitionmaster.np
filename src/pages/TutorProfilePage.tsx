import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, CheckCircle, Book, Calendar, Clock, Award, ShieldCheck, Mail, Phone } from 'lucide-react';
import { mockTutors } from '../lib/mock-data';

export function TutorProfilePage() {
  const { id } = useParams();
  const tutor = mockTutors.find(t => t.id === id);

  if (!tutor) {
    return <div className="p-20 text-center text-red-500 font-bold">Tutor not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-900 to-primary"></div>
          
          <div className="relative pt-12 flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 relative">
              <img src={tutor.photo} alt={tutor.name} className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-white shadow-xl" />
              {tutor.isVerified && (
                <div className="absolute -top-3 -right-3 bg-white p-1 rounded-full shadow-sm">
                  <ShieldCheck className="w-8 h-8 text-accent" />
                </div>
              )}
            </div>
            
            <div className="flex-1 mt-4 md:mt-20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h1 className="text-3xl font-display font-bold text-gray-900 flex items-center gap-2">
                    {tutor.name}
                  </h1>
                  <p className="text-lg text-gray-600 mt-1">{tutor.qualification}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {tutor.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {tutor.experience} Experience
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-3">
                   <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-xl">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <div>
                      <span className="font-bold text-lg text-amber-900 mr-1">{tutor.rating}</span>
                      <span className="text-xs text-amber-700/80">({tutor.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 uppercase tracking-widest block font-bold mb-1">Hourly Fee</span>
                    <span className="text-2xl font-bold text-gray-900">{tutor.hourlyFee}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Main */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl font-display font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{tutor.bio}</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl font-display font-bold text-gray-900 mb-6">Subjects Taught</h2>
              <div className="flex flex-wrap gap-3">
                {tutor.subjects.map(sub => (
                  <span key={sub} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-xl text-sm font-medium border border-blue-100 flex items-center gap-2">
                    <Book className="w-4 h-4 opacity-50" />
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl font-display font-bold text-gray-900 mb-4">Teaching Locations / Mode</h2>
              <div className="flex flex-wrap gap-4">
                {tutor.teachingMode.map(mode => (
                  <div key={mode} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 flex-1 min-w-[200px]">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                      {mode === 'Online' ? <Book className="w-5 h-5"/> : <MapPin className="w-5 h-5"/>}
                    </div>
                    <span className="font-medium text-gray-900">{mode} Classes</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 sticky top-24">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-6">Book this Tutor</h3>
              
              <div className="space-y-4 mb-6">
                <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary/20">
                  <Calendar className="w-5 h-5" />
                  Request Free Demo Class
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium py-3 rounded-2xl transition-colors border border-gray-200">
                    <Mail className="w-4 h-4" />
                    Message
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium py-3 rounded-2xl transition-colors border border-gray-200">
                    <Phone className="w-4 h-4" />
                    Call
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>Background verified digitally</span>
                </div>
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>Educational documents verified</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>Fast response time (usually within 1 hr)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
