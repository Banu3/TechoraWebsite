import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Home,
  Building2,
  Cpu,
  CreditCard,
  Briefcase,
  Calculator,
  ShieldCheck,
  PhoneCall,
  Shield
} from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Navbar = ({ activePage, setActivePage }) => {
  const { content } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Main enterprise links for desktop
  const desktopNavLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'it-consulting', label: 'IT Consulting' },
    { id: 'payroll-services', label: 'Payroll' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'roi-calculator', label: 'ROI Calculator' },
    { id: 'security', label: 'Security' }
  ];

  // Mobile navigation links
  const mobileNavLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Building2 },
    { id: 'it-consulting', label: 'IT Consulting', icon: Cpu, badge: 'Core' },
    { id: 'payroll-services', label: 'Payroll Services', icon: CreditCard, badge: 'Popular' },
    { id: 'case-studies', label: 'Case Studies', icon: Briefcase },
    { id: 'roi-calculator', label: 'ROI Calculator', icon: Calculator, badge: 'Tool' },
    { id: 'security', label: 'Security & Trust', icon: ShieldCheck },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#BAE6FD] shadow-[0_2px_15px_-3px_rgba(2,132,199,0.06)] py-2.5 sm:py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#BAE6FD] py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Corporate Monogram */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2.5 sm:space-x-3 group focus:outline-none shrink-0 text-left"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#092342] via-[#0F355C] to-[#0284C7] p-[1.5px] shadow-xs group-hover:shadow-md transition-all">
                <div className="w-full h-full bg-[#092342] rounded-[10px] flex items-center justify-center">
                  <span className="font-sans font-black text-white text-base sm:text-lg tracking-tighter">
                    T<span className="text-[#38BDF8]">.</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-lg sm:text-xl font-extrabold tracking-widest text-[#092342] font-sans leading-none group-hover:text-[#0284C7] transition-colors">
                  {content?.companyName || 'TECHORA'}
                </span>
                <span className="text-[7.5px] sm:text-[9px] text-[#0284C7] font-sans font-bold tracking-wider uppercase mt-1 leading-none whitespace-nowrap">
                  {content?.navbarSubtitle || 'IT CONSULTING & PAYROLL SOLUTIONS'}
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {desktopNavLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors relative ${
                      isActive
                        ? 'text-[#0284C7]'
                        : 'text-[#2D425A] hover:text-[#092342]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0284C7] rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center space-x-2 cursor-pointer active:scale-95 shadow-sm ${
                  activePage === 'contact'
                    ? 'bg-[#092342] text-white'
                    : 'bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-sky-600/20'
                }`}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Actions: Bespoke Designer Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 rounded-xl bg-white hover:bg-[#F0F9FF] border border-[#BAE6FD] shadow-[0_2px_8px_rgba(2,132,199,0.08)] hover:border-[#0284C7]/50 active:scale-90 transition-all flex items-center justify-center focus:outline-none group"
                aria-label="Open navigation menu"
              >
                <div className="w-4.5 h-3.5 flex flex-col justify-between">
                  <span className="w-4.5 h-[2px] bg-[#092342] rounded-full group-hover:bg-[#0284C7] transition-colors" />
                  <span className="w-3 h-[2px] bg-[#0284C7] rounded-full self-start transition-all" />
                  <span className="w-4.5 h-[2px] bg-[#092342] rounded-full group-hover:bg-[#0284C7] transition-colors" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Half-Width Side Drawer (approx 65% width from Right) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            {/* Dimmed Backdrop (Tap to close) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#092342]/40 backdrop-blur-xs"
            />

            {/* Side Drawer Panel (Half-Width: ~68% mobile width) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative w-[70vw] sm:w-[55vw] max-w-[320px] h-full h-[100dvh] bg-white border-l border-[#BAE6FD] shadow-[-12px_0_35px_rgba(9,35,66,0.15)] rounded-l-2xl flex flex-col justify-between z-10 overflow-hidden"
            >
              {/* Drawer Top Bar */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#BAE6FD] bg-[#F8FAFC] shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-[#092342] flex items-center justify-center text-white font-bold text-xs">
                    T<span className="text-[#38BDF8]">.</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-extrabold tracking-wider text-[#092342] leading-none">
                      {content?.companyName || 'TECHORA'}
                    </span>
                    <span className="text-[7px] font-bold text-[#0284C7] tracking-wider uppercase mt-0.5 leading-none">
                      {content?.navbarSubtitle || 'IT CONSULTING & PAYROLL SOLUTIONS'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white hover:bg-[#E0F2FE] text-[#092342] hover:text-[#0284C7] active:scale-90 transition-all border border-[#BAE6FD] shadow-xs flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Items List */}
              <div className="flex-1 overflow-y-auto p-3 space-y-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <p className="px-2 pt-1 pb-1.5 text-[10px] font-bold tracking-wider text-[#536B85] uppercase">
                  Menu
                </p>

                {mobileNavLinks.map((link) => {
                  const isActive = activePage === link.id;
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all active:scale-[0.98] ${
                        isActive
                          ? 'bg-[#E0F2FE] text-[#0284C7] font-bold border border-[#BAE6FD]'
                          : 'text-[#092342] hover:bg-[#F0F9FF] font-medium'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 min-w-0 pr-1">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isActive
                              ? 'bg-[#0284C7] text-white'
                              : 'bg-[#E0F2FE] text-[#0284C7]'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm tracking-tight truncate">
                          {link.label}
                        </span>
                      </div>

                      <div className="flex items-center space-x-1.5 shrink-0">
                        {link.badge && (
                          <span className="text-[8px] px-1 py-0.5 rounded font-bold bg-[#0284C7]/10 text-[#0284C7] uppercase">
                            {link.badge}
                          </span>
                        )}
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform ${
                            isActive
                              ? 'text-[#0284C7] translate-x-0.5'
                              : 'text-[#94A3B8]'
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}

                {/* Direct Contact Item */}
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all mt-2 border ${
                    activePage === 'contact'
                      ? 'bg-[#092342] text-white border-[#092342]'
                      : 'bg-[#F0F9FF] border-[#BAE6FD] text-[#092342] hover:bg-[#E0F2FE]'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#0284C7] text-white flex items-center justify-center">
                      <PhoneCall className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold">
                      Contact Us
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0284C7]" />
                </button>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="p-3.5 border-t border-[#BAE6FD] bg-[#F8FAFC] space-y-2.5 shrink-0">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 transition-all"
                >
                  <span>Schedule Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center justify-between text-[10px] text-[#536B85] px-1">
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-[#092342]">24/7 Operations</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[#0284C7]">
                    <Shield className="w-3 h-3" />
                    <span className="font-mono">SOC 2</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
