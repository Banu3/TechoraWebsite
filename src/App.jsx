import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ITConsultingPage } from './pages/ITConsultingPage';
import { PayrollServicesPage } from './pages/PayrollServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ROICalculatorPage } from './pages/ROICalculatorPage';
import { AboutPage } from './pages/AboutPage';
import { SecurityPage } from './pages/SecurityPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { CookieConsent } from './components/CookieConsent';

const getPageFromPath = () => {
  if (typeof window === 'undefined') return 'home';
  const cleanPath = window.location.pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
  
  if (
    cleanPath === 'adminprotal' ||
    cleanPath === 'adminportal' ||
    cleanPath === 'admin' ||
    cleanPath === 'admin-portal'
  ) {
    return 'admin';
  }
  if (cleanPath === 'it-consulting') return 'it-consulting';
  if (cleanPath === 'payroll-services' || cleanPath === 'payroll') return 'payroll-services';
  if (cleanPath === 'case-studies') return 'case-studies';
  if (cleanPath === 'roi-calculator') return 'roi-calculator';
  if (cleanPath === 'about') return 'about';
  if (cleanPath === 'security') return 'security';
  if (cleanPath === 'contact') return 'contact';
  return 'home';
};

export default function App() {
  const [activePage, setActivePage] = useState(() => getPageFromPath());
  const [selectedServiceTitle, setSelectedServiceTitle] = useState('');

  // Handle browser back/forward and direct path changes
  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getPageFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPage = (pageId) => {
    setActivePage(pageId);
    let targetPath = '/';
    if (pageId === 'admin') {
      targetPath = '/adminprotal';
    } else if (pageId !== 'home') {
      targetPath = `/${pageId}`;
    }
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ pageId }, '', targetPath);
    }
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage
            setActivePage={navigateToPage}
            setSelectedServiceTitle={setSelectedServiceTitle}
          />
        );
      case 'it-consulting':
        return (
          <ITConsultingPage
            setActivePage={navigateToPage}
            setSelectedServiceTitle={setSelectedServiceTitle}
          />
        );
      case 'payroll-services':
        return (
          <PayrollServicesPage
            setActivePage={navigateToPage}
            setSelectedServiceTitle={setSelectedServiceTitle}
          />
        );
      case 'case-studies':
        return (
          <CaseStudiesPage
            setActivePage={navigateToPage}
            setSelectedServiceTitle={setSelectedServiceTitle}
          />
        );
      case 'roi-calculator':
        return (
          <ROICalculatorPage
            setActivePage={navigateToPage}
            setSelectedServiceTitle={setSelectedServiceTitle}
          />
        );
      case 'about':
        return <AboutPage setActivePage={navigateToPage} />;
      case 'security':
        return <SecurityPage setActivePage={navigateToPage} />;
      case 'contact':
        return <ContactPage selectedServiceTitle={selectedServiceTitle} />;
      case 'admin':
        return <AdminPage setActivePage={navigateToPage} />;
      default:
        return (
          <HomePage
            setActivePage={navigateToPage}
            setSelectedServiceTitle={setSelectedServiceTitle}
          />
        );
    }
  };

  return (
    <AuthProvider>
      <ContentProvider>
        <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#2563EB]/20 selection:text-[#2563EB] flex flex-col justify-between">
          
          {/* Global Sticky Navigation */}
          <Navbar
            activePage={activePage}
            setActivePage={navigateToPage}
          />

          {/* Main View Area */}
          <main className="flex-grow">
            {renderActivePage()}
          </main>

          {/* Global Enterprise Footer (Hidden on Admin Portal for clean dashboard layout) */}
          {activePage !== 'admin' && (
            <Footer setActivePage={navigateToPage} />
          )}

          {/* Cookie Consent Banner & Preferences Modal */}
          {activePage !== 'admin' && (
            <CookieConsent />
          )}

        </div>
      </ContentProvider>
    </AuthProvider>
  );
}
