import { Heart, Code, Award } from "lucide-react";
const Footer = () => {
  return <footer className="bg-slate-900 text-white py-12 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* IEEE Volunteer Experience */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              
              
            </div>
            
          </div>
          
          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            
            <p className="text-gray-500 text-sm mt-4">© 2024 Dharshan A. All rights reserved.</p>
          </div>
          
          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;