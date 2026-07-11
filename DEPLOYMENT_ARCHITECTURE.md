# Martlet Trivia - Deployment Architecture

## System Overview

The trivia game is built on three interconnected systems: **GitHub** (code storage), **Railway** (cloud hosting), and **Wix** (your brewery website).

---

## How It Works Together

### 1. **GitHub** — Code Storage & Version Control
- **What it does:** Stores your game code (server.js, HTML files, config)
- **Purpose:** Acts as the source of truth for your project
- **Your setup:** 
  - Repository: `kevinchaddock-sudo/martlet-trivia`
  - Branch: `master`

---

### 2. **Railway** — Cloud Hosting
- **What it does:** Runs your game server on the internet 24/7
- **Purpose:** Makes your game accessible from anywhere (not just localhost)
- **Connection to GitHub:** 
  - Railway watches your GitHub repository
  - When you push code changes to GitHub, Railway automatically rebuilds and redeploys
  - Current deployment: `martlet-trivia-production.up.railway.app`

**How Railway works:**
- Pulls code from GitHub (`master` branch)
- Reads `package.json` to understand dependencies
- Runs `npm install` to install Express and Socket.io
- Starts the server with `npm start` (runs `server.js`)
- Server listens on port 3000 and serves both:
  - `/` — Host dashboard (at root)
  - `/player` — Player page

---

### 3. **Wix** — Your Brewery Website
- **What it does:** Displays your trivia game to customers
- **Purpose:** Embeds the Railway app into your martletbrewery.com site
- **How it connects:**
  - Wix uses an "Embed a site" component
  - Points directly to Railway's public URL: `https://martlet-trivia-production.up.railway.app`
  - When players visit your Wix page, they see your game

---

## Data Flow: How a Player Connects

```
1. Customer visits martletbrewery.com
       ↓
2. Clicks "Play Trivia" link
       ↓
3. Browser loads the player page from Railway (https://martlet-trivia-production.up.railway.app/player)
       ↓
4. Player joins with team name
       ↓
5. Socket.io establishes real-time connection to Railway server
       ↓
6. Player sees questions, selects answers
       ↓
7. Answers sent to Railway → broadcasted to host → leaderboard updates
```

---

## Update Workflow

**If you make changes to your game:**

1. Edit files on your computer (`player.html`, `server.js`, etc.)
2. Test locally: `npm start` on localhost
3. Push to GitHub:
   ```
   git add .
   git commit -m "describe your changes"
   git push
   ```
4. Railway auto-detects the push
5. Railway rebuilds and redeploys automatically
6. Your Wix site now shows the updated game (no action needed!)

---

## Environment: Production

- **Project Name:** `martlet-trivia`
- **Environment:** `production` (Railway's environment name)
- **URL:** `https://martlet-trivia-production.up.railway.app`
- **Public:** Anyone with the link can access
- **Server Status:** Online (green dot in Railway dashboard)

---

## Storage & Data

- **Game data:** Stored in server's RAM (not a database)
- **Persistence:** Lost when server restarts (fine for events)
- **Teams supported:** 10-30 teams safely (Railway free tier limits)
- **Questions:** Entered manually by host during each game

---

## Summary: Three Systems Working Together

| System | Role | Connection |
|--------|------|-----------|
| **GitHub** | Stores code | Railway reads from it |
| **Railway** | Runs server 24/7 | Wix connects to it |
| **Wix** | Your website | Embeds Railway's URL |

**Result:** Your brewery customers can visit martletbrewery.com, play trivia on their phones, and you control the game from the host dashboard — all without managing any infrastructure!
