import React from 'react';
import { Shield, Linkedin, Instagram, Facebook, Twitter, ArrowUpRight, Building2, Cookie } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Footer = ({ setActivePage }) => {
  const { content } = useContent();
  const handleLinkClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCookieSettings = () => {
    if (typeof window !== 'undefined' && window.openTechoraCookieSettings) {
      window.openTechoraCookieSettings();
    } else {
      window.dispatchEvent(new CustomEvent('open-cookie-settings'));
    }
  };

  const handleOpenCookiePolicy = () => {
    if (typeof window !== 'undefined' && window.openTechoraCookiePolicy) {
      window.openTechoraCookiePolicy();
    } else {
      window.dispatchEvent(new CustomEvent('open-cookie-policy'));
    }
  };

  return (
    <footer className="bg-[#E0F2FE] border-t border-[#BAE6FD] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#BAE6FD]">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#092342] flex items-center justify-center text-white font-mono font-bold shadow-xs">
                T
              </div>
              <span className="text-2xl font-black tracking-widest text-[#092342] font-sans">{content.companyName || 'TECHORA'}</span>
            </div>
            <p className="text-[#0284C7] font-bold text-sm">
              {content.footerTagline || '"Technology Built Around Your Business."'}
            </p>
            <p className="text-[#2D425A] text-sm max-w-md leading-relaxed font-medium">
              {content.footerDesc || 'Techora delivers strategic IT consulting and dependable payroll solutions that help enterprise organizations simplify operations, strengthen security posture, and scale with confidence.'}
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-[#2D425A] font-mono">
              <span className="flex items-center space-x-1.5 text-[#0284C7] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                <span>Enterprise Grade Security</span>
              </span>
              <span>•</span>
              <span className="font-semibold">100% Statutory Compliance</span>
            </div>
          </div>

          {/* Column 2: IT Consulting */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#092342] mb-4 font-sans">
              IT Consulting
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2D425A]">
              <li>
                <button onClick={() => handleLinkClick('it-consulting')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  IT Strategy & Advisory
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('it-consulting')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  Cloud Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('it-consulting')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  Cybersecurity Consulting
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('it-consulting')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  Digital Transformation
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('it-consulting')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  ERP & CRM Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Payroll Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#092342] mb-4 font-sans">
              Payroll Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2D425A]">
              <li>
                <button onClick={() => handleLinkClick('payroll-services')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  Payroll Processing
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('payroll-services')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  PF & ESI Management
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('payroll-services')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  TDS Statutory Compliance
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('payroll-services')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  Payslip Generation
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('payroll-services')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  Payroll Reporting & Analytics
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#092342] mb-4 font-sans">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2D425A]">
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  About Techora
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('case-studies')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('security')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  Security Architecture
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  Contact Advisory Team
                </button>
              </li>
              <li>
                <button onClick={handleOpenCookieSettings} className="hover:text-[#0284C7] transition-colors flex items-center space-x-1.5 cursor-pointer">
                  <Cookie className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Cookie Preferences</span>
                </button>
              </li>
              <li>
                <button onClick={handleOpenCookiePolicy} className="hover:text-[#0284C7] transition-colors cursor-pointer">
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#2D425A] space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <span>{content.footerCopyright || '© 2026 Techora Enterprise Solutions. All Rights Reserved.'}</span>
            <span className="hidden sm:inline text-[#BAE6FD]">|</span>
            <div className="flex items-center space-x-3 text-[11px] text-[#475569]">
              <button onClick={handleOpenCookieSettings} className="hover:text-[#0284C7] transition-colors cursor-pointer underline-offset-2 hover:underline">
                Cookie Settings
              </button>
              <span>•</span>
              <button onClick={handleOpenCookiePolicy} className="hover:text-[#0284C7] transition-colors cursor-pointer underline-offset-2 hover:underline">
                Cookie Policy
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white border border-[#BAE6FD] hover:border-[#0284C7] text-[#2D425A] hover:text-[#0284C7] transition-all shadow-xs">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white border border-[#BAE6FD] hover:border-[#0284C7] text-[#2D425A] hover:text-[#0284C7] transition-all shadow-xs">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white border border-[#BAE6FD] hover:border-[#0284C7] text-[#2D425A] hover:text-[#0284C7] transition-all shadow-xs">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white border border-[#BAE6FD] hover:border-[#0284C7] text-[#2D425A] hover:text-[#0284C7] transition-all shadow-xs">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
