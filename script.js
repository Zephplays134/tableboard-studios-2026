// Project 2026 status page
// Flip these two values to YES or NO when the status changes.
const STATUS = {
  testingInternally: "YES",
  finalizingTesting: "NO",
  lastUpdated: "October 28, 2026"
};

function applyStatus() {
  const updated = document.getElementById("last-updated");
  if (updated) updated.textContent = STATUS.lastUpdated;

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

applyStatus();
