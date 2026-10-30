// Project 2026 status page
// Flip these two values to YES or NO when the status changes.
const STATUS = {
  testingInternally: "YES",
  finalizingTesting: "NO",
  lastUpdated: "October 30, 2026"
};

function applyStatus() {
  const updated = document.getElementById("last-updated");
  if (updated) updated.textContent = STATUS.lastUpdated;

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

applyStatus();

// Countdown to the end of the 2026 release window.
// Built for reliability: the target is a single fixed Date object, the math is
// a plain floor of elapsed milliseconds (no drift from setInterval timing),
// it shows a finished state instead of going negative, and it bails out safely
// if any element is missing.
const COUNTDOWN_TARGET = new Date(2026, 11, 31, 23, 59, 59);

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const days = document.getElementById("cd-days");
  const hours = document.getElementById("cd-hours");
  const mins = document.getElementById("cd-mins");
  const secs = document.getElementById("cd-secs");
  const note = document.getElementById("countdown-note");
  if (!days || !hours || !mins || !secs) return;

  const diff = COUNTDOWN_TARGET.getTime() - Date.now();
  if (diff <= 0) {
    days.textContent = "0";
    hours.textContent = pad(0);
    mins.textContent = pad(0);
    secs.textContent = pad(0);
    if (note) note.textContent = "The 2026 release window has closed.";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  days.textContent = String(Math.floor(totalSeconds / 86400));
  hours.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
  mins.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
  secs.textContent = pad(totalSeconds % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);
