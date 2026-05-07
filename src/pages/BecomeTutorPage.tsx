import { UserPlus, Upload, ShieldCheck, Mail } from 'lucide-react';

export function BecomeTutorPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Register as a Tutor</h1>
          <p className="text-lg text-gray-600">Join thousands of educators earning through Home Tuition Master Nepal. It's free to join!</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 md:p-10">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Section 1: Basic Info */}
              <div>
                <h3 className="font-display font-bold text-xl text-gray-900 border-b border-gray-100 pb-4 mb-6">1. Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="e.g. Ram Sharma" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="ram@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="+977 98..." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">City/Location</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="e.g. Kathmandu" />
                  </div>
                </div>
              </div>

              {/* Section 2: Education */}
              <div>
                <h3 className="font-display font-bold text-xl text-gray-900 border-b border-gray-100 pb-4 mb-6">2. Academic Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Highest Qualification</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700">
                      <option>Select Qualification</option>
                      <option>Plus Two (+2)</option>
                      <option>Bachelor's Degree</option>
                      <option>Master's Degree</option>
                      <option>PhD</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Subjects you can teach</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="e.g. Math, Science, English (comma separated)" />
                  </div>
                </div>
              </div>

              {/* Section 3: Verification */}
              <div>
                <h3 className="font-display font-bold text-xl text-gray-900 border-b border-gray-100 pb-4 mb-6">3. Verification Documents</h3>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <Upload className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="font-medium text-gray-900 mb-1">Click to upload your ID / Citizenship</p>
                  <p className="text-sm text-gray-500">Supported formats: JPG, PNG, PDF (Max 5MB)</p>
                </div>
                <div className="mt-4 flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm text-blue-900">Your documents are securely stored and only used for profile verification. We do not share this with students.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  Submit Registration
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  By registering, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
