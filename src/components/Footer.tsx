import { BookOpen, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-display font-bold text-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white block leading-none">Home Tuition Master</span>
                <span className="text-accent text-[10px] font-bold tracking-widest uppercase">Nepal</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mt-4">
              Nepal's most trusted platform connecting motivated students with expert tutors. Find home or online tuition tailored to your needs.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white tracking-wide mb-6">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/tutors" className="hover:text-accent transition-colors">Find a Tutor</Link></li>
              <li><Link to="/jobs" className="hover:text-accent transition-colors">Tuition Jobs</Link></li>
              <li><Link to="/become-tutor" className="hover:text-accent transition-colors">Become a Tutor</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="font-display font-semibold text-white tracking-wide mb-6">Popular Subjects</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-accent transition-colors">Mathematics Tutors</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Science Tutors</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">SEE Preparation</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">IELTS & PTE Classes</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Computer Programming</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white tracking-wide mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>New Baneshwor, Kathmandu, Bagmati Province, Nepal</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+977 9800000000<br/>+977 01-4400000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>support@hometuitionmasternepal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Home Tuition Master Nepal. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
