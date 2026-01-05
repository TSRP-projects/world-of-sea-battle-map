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
    COAL: 0.01,
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

// Tier configuration - thresholds doubled, separate support for allied/non-allied
const TIERS = {
    DECKHAND: { name: 'Deckhand', min: 0, alliedSupport: 0.10, nonAlliedSupport: 0.10, emoji: '🪢' },
    BOSUN: { name: 'Bosun', min: 50, alliedSupport: 0.25, nonAlliedSupport: 0.20, emoji: '⚓' },
    QUARTERMASTER: { name: 'Quartermaster', min: 120, alliedSupport: 0.35, nonAlliedSupport: 0.25, emoji: '🧭' },
    CAPTAIN: { name: 'Captain', min: 240, alliedSupport: 0.50, nonAlliedSupport: 0.30, emoji: '🏴‍☠️' }
};

// Get tier from available points
// Returns tier object with calculated support based on alliance status
function getTierFromPoints(points, isAlly = true) {
    let tier;
    if (points >= TIERS.CAPTAIN.min) {
        tier = TIERS.CAPTAIN;
    } else if (points >= TIERS.QUARTERMASTER.min) {
        tier = TIERS.QUARTERMASTER;
    } else if (points >= TIERS.BOSUN.min) {
        tier = TIERS.BOSUN;
    } else {
        tier = TIERS.DECKHAND;
    }
    
    // Return tier with appropriate support value
    return {
        name: tier.name,
        min: tier.min,
        emoji: tier.emoji,
        support: isAlly ? tier.alliedSupport : tier.nonAlliedSupport
    };
}

// Calculate points for contribution
function calculateContributionPoints(activityType, materialType, quantity) {
  if (activityType === 'Fort Raid') {
    return POINT_VALUES.FORT_RAID;
  }
  
if (activityType === 'Material Donation') {
    const rates = {
      'iron': POINT_VALUES.IRON,
      'coal': POINT_VALUES.COAL,
      'wood': POINT_VALUES.WOOD,
      'resin': POINT_VALUES.RESIN,
      'fabric': POINT_VALUES.FABRIC,
      'plates': POINT_VALUES.PLATES,
      'beams': POINT_VALUES.BEAMS,
      'bulkheads': POINT_VALUES.BULKHEADS,
      'canvas': POINT_VALUES.CANVAS
    };
    return parseFloat((quantity * (rates[materialType] || 0)).toFixed(2));
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