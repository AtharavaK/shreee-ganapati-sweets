// ── CHATBOT ──

const botReplies = {
  "hello":      "Namaste! 🙏 Welcome to Shreee Ganapati Sweets. How can I help you today?",
  "hi":         "Namaste! 🙏 Welcome to Shreee Ganapati Sweets. How can I help you today?",
  "namaste":    "Namaste! 🙏 How can I help you today?",
  "price":      "Our sweets start at ₹200/box — Rava Ladoo ₹200, Gulab Jamun ₹220, Peanut Ladoo ₹220, Besan Ladoo ₹260, Motichoor Ladoo ₹280, Balushahi ₹300.",
  "cost":       "Our sweets start at ₹200/box — Rava Ladoo ₹200, Gulab Jamun ₹220, Peanut Ladoo ₹220, Besan Ladoo ₹260, Motichoor Ladoo ₹280, Balushahi ₹300.",
  "rate":       "Our sweets start at ₹200/box — Rava Ladoo ₹200, Gulab Jamun ₹220, Peanut Ladoo ₹220, Besan Ladoo ₹260, Motichoor Ladoo ₹280, Balushahi ₹300.",
  "deliver":    "Yes! We deliver across Kharadi and Pune. Call or WhatsApp +91 88302 49239 to arrange delivery. 🚚",
  "order":      "To order, fill the form on this page or WhatsApp us at +91 88302 49239. Sweets are freshly made daily! 🍬",
  "ingredient": "We use cold-pressed ghee, fresh dairy, real saffron and premium nuts — no preservatives, no artificial flavours.",
  "fresh":      "All sweets are freshly prepared on order! Best consumed within 5–7 days.",
  "contact":    "📞 +91 88302 49239 | 📸 @shreeeganapatisweets | 📍 Kharadi, Pune",
  "address":    "We are based in Kharadi, Pune, Maharashtra. Call us for exact address and delivery details.",
  "ladoo":      "We make Motichoor, Besan, Peanut and Rava Ladoos — all freshly crafted with pure ingredients! 🟡",
  "gulab":      "Our Gulab Jamun is made with fresh khoya and soaked in rose-cardamom syrup. ₹220/box 🫐",
  "barfi":      "Balushahi is our premium offering — flaky deep-fried pastry soaked in sugar syrup with pistachios. ₹300/box 🍩",
  "default":    "Thanks for your message! For quick help, call or WhatsApp us at +91 88302 49239 or DM @shreeeganapatisweets on Instagram. 🙏"
};

function getBotReply(input) {
  const low = input.toLowerCase();
  for (const key in botReplies) {
    if (key !== 'default' && low.includes(key)) return botReplies[key];
  }
  return botReplies.default;
}

function addMsg(text, type) {
  const messages = document.getElementById('chatMessages');
  if (!messages) return;
  const m = document.createElement('div');
  m.className = `msg ${type}`;
  m.textContent = text;
  messages.appendChild(m);
  messages.scrollTop = messages.scrollHeight;
}

function sendMsg() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  addMsg(val, 'user');
  input.value = '';
  setTimeout(() => addMsg(getBotReply(val), 'bot'), 550);
}

function toggleChat() {
  const bubble = document.getElementById('chatBubble');
  if (!bubble) return;
  const isOpen = bubble.classList.toggle('open');
  if (isOpen) {
    const messages = document.getElementById('chatMessages');
    if (messages && messages.children.length === 0) {
      setTimeout(() => addMsg("Namaste! 🙏 Welcome to Shreee Ganapati Sweets. Ask me about our sweets, prices or delivery!", 'bot'), 300);
    }
  }
}
