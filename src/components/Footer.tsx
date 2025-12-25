import { GraduationCap, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B3C53] dark:bg-[#0F1F2E] text-white py-12 border-t border-transparent dark:border-[#456882]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-[#D2C1B6]" />
              <span className="text-xl">AMIGOS AGENCY</span>
            </div>
            <p className="text-[#D2C1B6] mb-4">
              Your trusted partner for international education. We help students secure admissions and scholarships in universities worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#456882] dark:bg-[#1B3C53] rounded-full flex items-center justify-center hover:bg-[#D2C1B6] hover:text-[#1B3C53] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#456882] dark:bg-[#1B3C53] rounded-full flex items-center justify-center hover:bg-[#D2C1B6] hover:text-[#1B3C53] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#456882] dark:bg-[#1B3C53] rounded-full flex items-center justify-center hover:bg-[#D2C1B6] hover:text-[#1B3C53] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#456882] dark:bg-[#1B3C53] rounded-full flex items-center justify-center hover:bg-[#D2C1B6] hover:text-[#1B3C53] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[#D2C1B6]">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Packages</a></li>
              <li><a href="#countries" className="hover:text-white transition-colors">Countries</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-[#D2C1B6]">
              <li><a href="#services" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Scholarships</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Visa Support</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Relocation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#456882] dark:border-[#456882]/30 pt-8 text-center text-[#D2C1B6]">
          <p>&copy; {currentYear} AMIGOS AGENCY. All rights reserved. Your friendly partner in global education. Made by S.</p>
        </div>
      </div>
    </footer>
  );
}