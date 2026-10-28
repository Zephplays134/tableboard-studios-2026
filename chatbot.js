// Elevator chatbot
// A keyless, dependency-free assistant for this page. It answers from a
// knowledge map so it never needs an API key, matching Elevator's promise.

const KNOWLEDGE = {
  greeting: "Ahoy! I'm Elevator, Tableboard Studios' AI. Ask me about Project 2026, the testing status, or me.",
  testing: "Yes, Project 2026 is currently being tested internally. The team has the build live inside the studio right now.",
  finalizing: "Not yet. Internal testing is underway, but it isn't being finalized. This flips to YES when it is, and you'll see it in the status cards.",
  release: "No release date yet, it's TBA. The Updates section on this page is the first place a date will appear.",
  project: "Project 2026 is our cruise ship simulator for Roblox, developed by Tableboard Studios. It's currently in internal testing.",
  elevator: "I'm Elevator, Tableboard Studios' own AI model. Unlimited, fully free, keyless, and reliable. That means no API key, no sign-up, and no limits to use me here.",
  updates: "Latest update (October 28, 2026): internal testing of Project 2026 is officially in progress. Scroll to the Updates section for the full log.",
  fallback: "I don't know that one yet. I can answer about Project 2026, internal testing, the release, or Elevator. Try one of the buttons below."
};

const PATTERNS = [
  [/\b(hi|hello|hey|ahoy|yo)\b/i, "greeting"],
  [/test.*(intern|yes|no|status)|intern.*test|testing internally/i, "testing"],
  [/finaliz|done testing|finished testing/i, "finalizing"],
  [/release|launch|when.*(come|out|drop)|date/i, "release"],
  [/project ?2026|cruise|ship|simulator/i, "project"],
  [/elevator|your ?self|who are you|ai model/i, "elevator"],
  [/update|news|new|changelog/i, "updates"]
];

const messages = document.getElementById("chat-messages");
const panel = document.getElementById("chat-panel");
const fab = document.getElementById("chat-fab");
const closeBtn = document.getElementById("chat-close");
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const suggestions = document.getElementById("chat-suggestions");

function addMessage(text, who) {
  const row = document.createElement("div");
  row.className = "msg " + who;
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  row.appendChild(bubble);
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
}

function answerFor(question) {
  for (const [pattern, key] of PATTERNS) {
    if (pattern.test(question)) return KNOWLEDGE[key];
  }
  return KNOWLEDGE.fallback;
}

function handleQuestion(question) {
  if (!question.trim()) return;
  addMessage(question, "user");
  input.value = "";
  setTimeout(() => addMessage(answerFor(question), "bot"), 350);
}

function openChat() {
  panel.hidden = false;
  fab.classList.add("hidden");
  if (!messages.childElementCount) addMessage(KNOWLEDGE.greeting, "bot");
  input.focus();
}

function closeChat() {
  panel.hidden = true;
  fab.classList.remove("hidden");
}

fab.addEventListener("click", openChat);
closeBtn.addEventListener("click", closeChat);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleQuestion(input.value);
});
suggestions.addEventListener("click", (event) => {
  const btn = event.target.closest("button[data-q]");
  if (btn) handleQuestion(btn.dataset.q);
});
