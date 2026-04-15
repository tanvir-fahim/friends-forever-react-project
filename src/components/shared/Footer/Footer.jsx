import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="bg-[#1e3d30] text-white py-8 px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <h2 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
        <p className="text-gray-300 text-center  mb-4 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center mb-4">
          <span className="text-lg font-medium mb-2">Social Links</span>
          <div className="flex gap-4">
            <a href="#" className="bg-white p-2 rounded-full text-[#1e3d30] hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="bg-white p-2 rounded-full text-[#1e3d30] hover:bg-gray-200 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="bg-white p-2 rounded-full text-[#1e3d30] hover:bg-gray-200 transition-colors">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-gray-600/50 pt-3 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;