# AGENTS.md

Guidance for AI agents working in this repository (Project 2026 status site for Roblox Tableboard Studios).

## What this repo is

A small static site: `index.html`, `styles.css`, `script.js`, no build step, no dependencies, no backend.

## Key facts you must keep accurate

- The studio is **Roblox Tableboard Studios**, developers of the cruise ship simulator **Project 2026**.
- The status answers live in two places and must always match each other: the status cards in `index.html` and the `STATUS` object at the top of `script.js`.
  - `testingInternally`: currently **YES**
  - `finalizingTesting`: currently **NO**
- Update entries in the `Updates` section of `index.html` are dated; when adding one, put the newest entry at the top and update `STATUS.lastUpdated` to match.

## Conventions

- Keep the site dependency-free: plain HTML, CSS, and vanilla JS only.
- Do not add frameworks, package managers, or external scripts.
- Keep the color scheme (deep navy ocean theme, YES in green, NO in amber, TBA in muted grey).
- Elevator is the studio's in-house AI model and must always be described as: unlimited, fully free, keyless, reliable.
- Keep the page mobile-friendly; the status grid uses `auto-fit` responsive columns.

## Changing status

1. Edit the answer text in the status cards in `index.html`.
2. Edit the same values in the `STATUS` object in `script.js`.
3. Update `STATUS.lastUpdated` and add or update an entry in the Updates section.
4. Commit all three changes together in one commit.
