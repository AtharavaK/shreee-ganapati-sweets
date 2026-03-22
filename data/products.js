// ═══════════════════════════════════════════
//  SHREEE GANAPATI SWEETS — PRODUCT CONFIG
// ═══════════════════════════════════════════
// HOW TO EDIT:
//   • Change price        → update the number after "price:"  (₹ per kg)
//   • Change name         → update the text after "name:"
//   • Change description  → update the text after "description:"
//   • Add a badge         → replace null with "Your Badge Text"
//   • Remove a badge      → replace text with null
//   • Add a new sweet     → copy one { ... } block and paste it before the last ]
//   • Remove a sweet      → delete the entire { ... } block for that item
// ═══════════════════════════════════════════

// ── MINIMUM ORDER CONFIG ──
// ✏️  Change these two lines if your minimum order changes
const MIN_ORDER_GRAMS = 250;    // minimum order in grams
const MIN_ORDER_LABEL = '250g'; // label shown to customers

const products = [
  {
    name: "Motichoor Ladoo",
    description: "Tiny gram flour pearls in a melt-in-mouth golden ball, infused with cardamom.",
    price: 280,        // ₹ per kg — change this number to update price
    image: "motichoor-ladoo.jpg",
    emoji: "🟡",
    badge: "Bestseller" // set to null to remove badge
  },
  {
    name: "Besan Ladoo",
    description: "Slow-roasted gram flour with pure ghee, sugar and a hint of nutmeg.",
    price: 260,        // ₹ per kg
    image: "besan-ladoo.jpg",
    emoji: "🟤",
    badge: null
  },
  {
    name: "Gulab Jamun",
    description: "Soft khoya dumplings soaked in a fragrant rose-cardamom sugar syrup.",
    price: 220,        // ₹ per kg
    image: "gulab-jamun.jpg",
    emoji: "🫐",
    badge: "Fan Favourite"
  },
  {
    name: "Peanut Ladoo",
    description: "Roasted peanuts blended with jaggery and cardamom, rolled into wholesome energy-packed balls.",
    price: 220,        // ₹ per kg
    image: "peanut-ladoo.jpg",
    emoji: "🥜",
    badge: null
  },
  {
    name: "Balushahi",
    description: "Flaky, melt-in-mouth deep-fried pastry soaked in sugar syrup, topped with pistachios.",
    price: 300,        // ₹ per kg
    image: "balushahi.jpg",
    emoji: "🍩",
    badge: "Premium"
  },
  {
    name: "Rava Ladoo",
    description: "Semolina, ghee, fresh coconut and cashews blended into a fragrant ball.",
    price: 200,        // ₹ per kg
    image: "rava-ladoo.jpg",
    emoji: "🔶",
    badge: null
  }
];
