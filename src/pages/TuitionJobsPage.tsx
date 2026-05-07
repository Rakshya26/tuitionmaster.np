import { MapPin, Clock, Briefcase, ChevronRight } from 'lucide-react';
import { mockJobs } from '../lib/mock-data';

export function TuitionJobsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Latest Tuition Jobs</h1>
            <p className="text-lg text-gray-600 max-w-2xl">Apply to the latest home and online tuition requirements posted by students and parents across Nepal.</p>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-medium shadow-md whitespace-nowrap">
            Post a Tuition Job
          </button>
        </div>

        <div className="space-y-4">
          {mockJobs.map(job => (
            <div key={job.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 hover:border-primary/30 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-emerald-50 text-accent-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {job.type}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.postedDate}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {job.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 font-medium text-gray-900">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                      Budget: {job.budget}
                    </div>
                  </div>
                </div>
                
                <div className="shrink-0 flex items-center">
                  <button className="w-full md:w-auto flex items-center justify-between gap-4 bg-gray-50 hover:bg-primary hover:text-white text-gray-900 px-6 py-3 rounded-xl font-medium transition-colors border border-gray-200">
                    Apply Now
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
