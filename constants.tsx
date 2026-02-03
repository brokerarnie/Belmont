
import { Listing, Contact, Agent } from './types';

export const MOCK_AGENTS: Agent[] = [];

export const MOCK_LISTINGS: Listing[] = [];

export const MOCK_CONTACTS: Contact[] = [
  {
    id: 101,
    name: "John Doe (Test Lead)",
    email: "john.doe@example.com",
    phone: "(818) 555-1234",
    lastCheckIn: "Today",
    createdAt: new Date().toISOString(),
    type: 'buyers',
    status: 'Warm',
    notes: ["Interested in Woodland Hills area. Looking for a 3+ bed with a pool."],
    calls: [],
    tasks: [
      { id: 't1', title: "Send initial disclosure pack", dueDate: "Tomorrow", completed: false }
    ],
    appointments: [],
    desires: { locationPreference: 'Woodland Hills', budgetMax: 1400000, minBeds: 3, minBaths: 2, features: ['Pool', 'View'] }
  }
];

export const QUIZ_QUESTIONS = [
  { q: "Which of the following creates a voluntary lien on real estate?", options: ["A tax assessment", "A mortgage", "An encroachment", "An easement"], correct: 1 },
  { q: "A person who has complete control over a parcel of real estate is said to own a:", options: ["Leasehold estate", "Fee simple estate", "Life estate", "Defeasible fee estate"], correct: 1 },
  { q: "The process by which the government exercises its right of eminent domain is known as:", options: ["Condemnation", "Escheat", "Adverse possession", "Dedication"], correct: 0 },
  { q: "Real property is defined as:", options: ["Land and the air above it", "Land and the mineral rights", "Land and all things permanently attached", "Trade fixtures"], correct: 2 },
];

export const LIBRARY_DATA = [
  {
    id: 'maxwell_21_laws',
    title: "The 21 Irrefutable Laws of Leadership",
    author: "John C. Maxwell",
    coverColor: "bg-blue-800",
    sections: [
      {
        id: 1,
        title: "Foreword & Introduction",
        content: "Everything rises and falls on leadership. This book is my answer to the question: 'If you were to take everything you’ve learned about leadership and boil it down, what would it be?'\n\nLeadership is constant, no matter where you go. Principles are constant—whether looking at ancient Greece, the Old Testament, or business today. \n\nFour Key Ideas:\n1. The laws can be learned.\n2. The laws can stand alone.\n3. The laws carry consequences.\n4. These laws are the foundation of leadership.",
        prompt: "Reflect on a leadership failure you've witnessed. Was it a violation of a 'constant' principle?"
      },
      {
        id: 2,
        title: "1. The Law of the Lid",
        content: "Leadership Ability Determines a Person's Level of Effectiveness. Your leadership ability is the 'lid' on your potential. If your leadership rates an 8, your effectiveness can never be greater than a 7. \n\nThe McDonald Brothers (Dick and Maurice) were brilliant managers but lacked leadership. They hit a 'lid' in San Bernardino. Ray Kroc, a leader with vision, took their system and built a global empire by raising the leadership lid.",
        prompt: "On a scale of 1-10, where is your current 'leadership lid'? What one thing can you do to raise it?"
      }
    ]
  },
  {
    id: 'pena_100_million',
    title: "Your First 100 Million",
    author: "Daniel S. Peña, Sr.",
    coverColor: "bg-red-950",
    sections: [
      {
        id: 1,
        title: "Prologue: The Price of Fear",
        content: "The paralysis of fear can cost dearly, while the rewards of determined courage are incalculable. Grasp chaos. Force change. This book is about achieving the mental toughness and laser-beam focus needed to make a ton of money.\n\nSuccess and wealth aren't for everybody. This is not a 'feel good' book. It's the unvarnished truth about how corporate business really works.",
        prompt: "What is your current biggest business fear? How much is it costing you annually?"
      }
    ]
  }
];
