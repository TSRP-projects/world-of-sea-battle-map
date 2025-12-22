// Firebase configuration - YOUR PROJECT CREDENTIALS
const firebaseConfig = {
  apiKey: "AIzaSyCf8kxBTYunTfUoBXLOsGEl70NvMQTz6sI",
  authDomain: "wosb-guild-tracker.firebaseapp.com",
  projectId: "wosb-guild-tracker",
  storageBucket: "wosb-guild-tracker.firebasestorage.app",
  messagingSenderId: "590203195386",
  appId: "1:590203195386:web:4504ab2164a402be671e43"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Point calculation constants - EDIT THESE TO CHANGE VALUES GLOBALLY
const POINT_VALUES = {
    FORT_RAID: 3,
    BEAMS: 1,
    BULKHEADS: 2,
    PLATES: 1,
    CANVAS: 0.5,
    IRON: 0.01,
    WOOD: 0.001,
    RESIN: 0.005,
    FABRIC: 0.0005
};

const DEFAULT_PLAYER_INVENTORY = {
    beams: 0,
    bulkheads: 0,
    plates: 0,
    canvas: 0,
    battleMarks: 0,
    constructionLicense: 0,
    escudo: 0,
    imperialBlueprint:0
};

// Tier configuration
const TIERS = {
    DECKHAND: { name: 'Deckhand', min: 0, support: 0.10, emoji: '🪢' },
    BOSUN: { name: 'Bosun', min: 25, support: 0.25, emoji: '⚓' },
    QUARTERMASTER: { name: 'Quartermaster', min: 60, support: 0.35, emoji: '🧭' },
    CAPTAIN: { name: 'Captain', min: 120, support: 0.50, emoji: '🏴‍☠️' }
};

// Get tier from available points
function getTierFromPoints(points) {
    if (points >= TIERS.CAPTAIN.min) return TIERS.CAPTAIN;
    if (points >= TIERS.QUARTERMASTER.min) return TIERS.QUARTERMASTER;
    if (points >= TIERS.BOSUN.min) return TIERS.BOSUN;
    return TIERS.DECKHAND;
}

// Calculate points for contribution
function calculateContributionPoints(activityType, materialType, quantity) {
  if (activityType === 'Fort Raid') {
    return POINT_VALUES.FORT_RAID;
  }
  
  if (activityType === 'Material Donation') {
    const rates = {
      'Iron': POINT_VALUES.IRON,
      'Wood': POINT_VALUES.WOOD,
      'Plates': POINT_VALUES.PLATES,
      'Beams': POINT_VALUES.BEAMS,
      'Bulkheads': POINT_VALUES.BULKHEADS,
      'Canvas': POINT_VALUES.CANVAS
    };
    return Math.round(quantity * (rates[materialType] || 0));
  }
  
  return 0;
}

// Calculate ship cost from materials (excludes battle marks)
function calculateShipCost(ship) {
  return (ship.beams || 0) * POINT_VALUES.BEAMS +
         (ship.bulkheads || 0) * POINT_VALUES.BULKHEADS +
         (ship.plates || 0) * POINT_VALUES.PLATES +
         (ship.canvas || 0) * POINT_VALUES.CANVAS;
}

// Format number with locale
function formatNumber(num) {
  return num.toLocaleString();
}

// Get relative time string
function getRelativeTime(timestamp) {
  if (!timestamp) return 'Never';
  const date = timestamp.toDate();
  const daysAgo = Math.floor((Date.now() - date) / (1000 * 60 * 60 * 24));
  if (daysAgo === 0) return 'Today';
  if (daysAgo === 1) return 'Yesterday';
  return `${daysAgo} days ago`;
}