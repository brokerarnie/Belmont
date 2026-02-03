
import React, { useState, useEffect } from 'react';
import { View, User, Listing, Contact, Agent } from './types';
import { MOCK_LISTINGS, MOCK_CONTACTS } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Directory from './views/Directory';
import AgentDashboard from './views/AgentDashboard';
import Chat from './views/Chat';
import AgentChat from './views/AgentChat';
import Library from './views/Library';
import CmaTool from './views/CmaTool';
import CRM from './views/CRM';
import CalendarView from './views/CalendarView';
import ListingsManager from './views/ListingsManager';
import Quiz from './views/Quiz';
import LoginView from './views/LoginView';
import MarketplaceView from './views/MarketplaceView';
import LegalView from './views/LegalView';
import PostProperty from './views/PostProperty';
import MlsSearchView from './views/MlsSearchView';
import ProfessionalsView from './views/ProfessionalsView';
import GamesView from './views/GamesView';
import HistoricCenter from './views/HistoricCenter';
import ForumsView from './views/ForumsView';
import MyMontView from './views/MyMontView';
import KnowYourRights from './views/KnowYourRights';
import LeadSourcesView from './views/LeadSourcesView';
import ScriptsView from './views/ScriptsView';
import ComplianceAuditView from './views/ComplianceAuditView';
import FileArchiveView from './views/FileArchiveView';
import IncentivesView from './views/IncentivesView';
import SettingsView from './views/SettingsView';
import SellerNetSheet from './views/SellerNetSheet';
import CommissionCalculator from './views/CommissionCalculator';
import { LanguageProvider } from './context/LanguageContext';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [lastView, setLastView] = useState<View>(View.HOME);
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('belmont_active_session');
    return saved ? JSON.parse(saved) : null;
  });
  const [listings, setListings] = useState<Listing[]>(MOCK_LISTINGS);
  const [contacts, setContacts] = useState<Contact[]>(MOCK_CONTACTS);
  const [selectedProType, setSelectedProType] = useState<Agent['type']>('agent');
  const [darkMode, setDarkMode] = useState(false);

  const navigate = (view: View) => {
    if (currentView !== View.GAMES && currentView !== View.USER_LOGIN && currentView !== View.AGENT_LOGIN) {
      setLastView(currentView);
    }
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-slate-950', 'text-slate-100');
      document.body.classList.remove('bg-slate-50', 'text-slate-900');
    } else {
      document.body.classList.add('bg-slate-50', 'text-slate-900');
      document.body.classList.remove('bg-slate-950', 'text-slate-100');
    }
  }, [darkMode]);

  const isAgentView = (view: View) => {
    return [
      View.AGENT_PORTAL,
      View.AGENT_CRM,
      View.AGENT_LEADS,
      View.AGENT_CALENDAR,
      View.AGENT_LISTINGS,
      View.AGENT_SCRIPTS,
      View.AGENT_LIBRARY,
      View.AGENT_QUIZ,
      View.AGENT_MYMONT,
      View.AGENT_AI_CMA,
      View.AGENT_COMPLIANCE_AUDIT,
      View.AGENT_FILE_ARCHIVE,
      View.AGENT_CHAT,
      View.AGENT_NET_SHEET,
      View.AGENT_COMMISSION_CALC
    ].includes(view);
  };

  const navigatePro = (type: Agent['type']) => {
    setSelectedProType(type);
    navigate(View.PROFESSIONALS);
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('belmont_active_session', JSON.stringify(user));
    if (user.isAgent) {
      navigate(View.AGENT_PORTAL);
    } else {
      navigate(View.HOME);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('belmont_active_session');
    navigate(View.HOME);
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Directory navigate={navigate} onProNavigate={navigatePro} darkMode={darkMode} />;
      case View.AGENT_PORTAL:
        return <AgentDashboard navigate={navigate} user={currentUser} logout={handleLogout} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />;
      case View.CHAT:
        return <Chat navigate={navigate} user={currentUser} darkMode={darkMode} />;
      case View.AGENT_CHAT:
        return <AgentChat navigate={navigate} user={currentUser} darkMode={darkMode} />;
      case View.AGENT_AI_CMA:
        return <CmaTool navigate={navigate} darkMode={darkMode} />;
      case View.AGENT_NET_SHEET:
        return <SellerNetSheet navigate={navigate} darkMode={darkMode} />;
      case View.AGENT_COMMISSION_CALC:
        return <CommissionCalculator navigate={navigate} darkMode={darkMode} />;
      case View.AGENT_COMPLIANCE_AUDIT:
        return <ComplianceAuditView navigate={navigate} darkMode={darkMode} />;
      case View.AGENT_FILE_ARCHIVE:
        return <FileArchiveView navigate={navigate} darkMode={darkMode} />;
      case View.AGENT_CRM:
        return <CRM navigate={navigate} contacts={contacts} setContacts={setContacts} darkMode={darkMode} />;
      case View.AGENT_LEADS:
        return <LeadSourcesView navigate={navigate} user={currentUser} darkMode={darkMode} />;
      case View.AGENT_SCRIPTS:
        return <ScriptsView navigate={navigate} user={currentUser} darkMode={darkMode} />;
      case View.AGENT_CALENDAR:
        return <CalendarView navigate={navigate} contacts={contacts} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} user={currentUser} logout={handleLogout} />;
      case View.AGENT_MYMONT:
        return <MyMontView navigate={navigate} user={currentUser} logout={handleLogout} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />;
      case View.AGENT_LISTINGS:
        return <ListingsManager navigate={navigate} listings={listings} setListings={setListings} user={currentUser} />;
      case View.AGENT_LIBRARY:
        return <Library navigate={navigate} darkMode={darkMode} />;
      case View.AGENT_QUIZ:
        return <Quiz navigate={navigate} darkMode={darkMode} />;
      case View.AGENT_LOGIN:
      case View.USER_LOGIN:
        return <LoginView navigate={navigate} onLogin={handleLogin} isAgent={currentView === View.AGENT_LOGIN} />;
      case View.CLASSIFIEDS:
        return <MarketplaceView navigate={navigate} listings={listings} darkMode={darkMode} />;
      case View.SEARCH:
        return <MlsSearchView navigate={navigate} darkMode={darkMode} />;
      case View.POST_PROPERTY:
        return <PostProperty navigate={navigate} darkMode={darkMode} />;
      case View.PROFESSIONALS:
        return <ProfessionalsView navigate={navigate} user={currentUser} onLogin={handleLogin} proType={selectedProType} darkMode={darkMode} />;
      case View.FORUMS:
        return <ForumsView navigate={navigate} user={currentUser} darkMode={darkMode} />;
      case View.GAMES:
        return <GamesView navigate={navigate} darkMode={darkMode} fromAgent={lastView === View.AGENT_PORTAL} />;
      case View.HISTORIC_CENTER:
        return <HistoricCenter navigate={navigate} darkMode={darkMode} />;
      case View.LEGAL:
        return <LegalView navigate={navigate} darkMode={darkMode} />;
      case View.KNOW_YOUR_RIGHTS:
        return <KnowYourRights navigate={navigate} darkMode={darkMode} />;
      case View.INCENTIVES:
        return <IncentivesView navigate={navigate} darkMode={darkMode} />;
      case View.SETTINGS:
        return <SettingsView navigate={navigate} user={currentUser} onLogout={handleLogout} darkMode={darkMode} />;
      default:
        return <Directory navigate={navigate} onProNavigate={navigatePro} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {!isAgentView(currentView) && (
        <Navbar navigate={navigate} user={currentUser} onLogout={handleLogout} onToggleDarkMode={toggleDarkMode} />
      )}
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
