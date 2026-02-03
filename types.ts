
// View enum defines the navigation states of the application.
export enum View {
  HOME = 'home',
  SEARCH = 'search',
  CLASSIFIEDS = 'classifieds',
  PROPERTIES = 'properties',
  POST_PROPERTY = 'post-property',
  PROFESSIONALS = 'professionals',
  USER_LOGIN = 'user-login',
  AGENT_LOGIN = 'agent-login',
  AGENT_PORTAL = 'agent-portal',
  AGENT_CRM = 'agent-crm',
  AGENT_LEADS = 'agent-leads',
  AGENT_CALENDAR = 'agent-calendar',
  AGENT_LISTINGS = 'agent-listings',
  AGENT_SCRIPTS = 'agent-scripts',
  AGENT_LIBRARY = 'agent-library',
  AGENT_QUIZ = 'agent-quiz',
  AGENT_MYMONT = 'agent-mymont',
  AGENT_AI_CMA = 'agent-ai-cma',
  AGENT_COMPLIANCE_AUDIT = 'agent-compliance-audit',
  AGENT_FILE_ARCHIVE = 'agent-file-archive',
  AGENT_NET_SHEET = 'agent-net-sheet',
  AGENT_COMMISSION_CALC = 'agent-commission-calc',
  CHAT = 'chat',
  AGENT_CHAT = 'agent-chat',
  FORUMS = 'forums',
  GAMES = 'games',
  HISTORIC_CENTER = 'historic-center',
  LEGAL = 'legal',
  KNOW_YOUR_RIGHTS = 'know-your-rights',
  INCENTIVES = 'incentives',
  SETTINGS = 'settings'
}

export type Language = 'en' | 'es' | 'hy' | 'ru' | 'ko' | 'zh' | 'tl';
export type FontSize = 'S' | 'M' | 'L' | 'XL';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isAgent?: boolean;
  isVerified?: boolean; // Security field for 2FA
}

export interface Agent {
  id: string;
  name: string;
  license: string;
  photo: string;
  specialties: string[];
  phone: string;
  email: string;
  bio: string;
  type: 'agent' | 'loan_officer' | 'insurance_agent' | 'valuation' | 'cpa' | 'attorney' | 'contractor' | 'architect_engineer' | 'maid_service';
  status?: 'pending' | 'approved';
}

export interface Listing {
  id: number;
  address: string;
  city: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  category: 'sale' | 'lease' | 'rentals' | 'commercial' | 'commercial_land' | 'business_no_land' | 'parking' | 'office' | 'rooms' | 'sublets' | 'wanted_room' | 'wanted_re' | 'vacation' | 'wanted_apt' | 'wanted_sublet';
  status: 'Active' | 'Sold' | 'Pending';
  description: string;
  image: string;
  agentInfo?: {
    name: string;
    license: string;
    phone: string;
    email: string;
    agentId?: string;
  };
}

export interface Task {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
}

export interface Appointment {
  id: string;
  title: string;
  date: string;
  location: string;
}

export interface Desires {
  locationPreference?: string;
  budgetMax?: number;
  minBeds?: number;
  minBaths?: number;
  features?: string[];
}

export interface CallLog {
  id: string;
  timestamp: string;
  duration: string;
  transcript: string;
  aiAnalysis: {
    missedPoints: string[];
    suggestions: string[];
    reminders: string[];
    extractedAddresses?: string[];
    extractedPrices?: string[];
  };
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  priceRange?: string;
  lastCheckIn: string;
  createdAt: string;
  type: 'buyers' | 'sellers' | 'renters' | 'owners' | 'past';
  status: 'Hot' | 'Warm' | 'Cold' | 'Active' | 'Sold';
  notes?: string[];
  aiSuggestions?: string[];
  calls?: CallLog[];
  desires?: Desires;
  tasks?: Task[];
  appointments?: Appointment[];
}

export interface ChatMessage {
  id: number;
  sender: string;
  role: string;
  text: string;
  timestamp: string;
  isAi: boolean;
}
