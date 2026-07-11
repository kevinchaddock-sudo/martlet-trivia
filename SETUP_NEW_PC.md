# Setup Trivia App on a New PC

## Overview

This guide covers setting up the Martlet Trivia app on a brand new PC (in Pocatello or anywhere else).

---

## Prerequisites to Install

You need three things:
1. **Node.js** (runtime for the app)
2. **Git** (for GitHub)
3. **VS Code** (optional, for editing)

---

## Step 1: Install Node.js

Node.js is the engine that runs your trivia app server.

### Download Node.js

1. Go to **https://nodejs.org/**
2. Click **"LTS"** (Long Term Support) — this is the stable version
3. Download the Windows installer
4. Run the installer

### Install Node.js

1. Double-click the installer
2. Click **"Next"** through all screens (defaults are fine)
3. Accept the license
4. Let it install globally
5. Click **"Finish"**

### Verify Installation

Open **PowerShell** and run:
```powershell
node --version
npm --version
```

You should see version numbers like:
```
v20.11.0
10.2.4
```

If you see them, **Node.js is installed!** ✅

---

## Step 2: Install Git

Git lets you download code from GitHub.

### Download Git

1. Go to **https://git-scm.com/download/win**
2. The download starts automatically
3. Run the installer

### Install Git

1. Double-click the installer
2. Click **"Next"** through all screens (defaults are fine)
3. Keep clicking "Next" — all defaults work
4. Click **"Install"**
5. Click **"Finish"**

### Verify Installation

Close PowerShell completely, then reopen it and run:
```powershell
git --version
```

You should see:
```
git version 2.55.0.windows.2
```

If you see it, **Git is installed!** ✅

---

## Step 3: Install VS Code (Optional)

VS Code is a code editor. Only needed if you want to edit the code.

### Download VS Code

1. Go to **https://code.visualstudio.com/**
2. Click **"Download for Windows"**
3. Run the installer

### Install VS Code

1. Double-click the installer
2. Click **"Next"** through screens
3. Check the box: **"Add to PATH"**
4. Click **"Install"**
5. Click **"Finish"**

---

## Step 4: Get the Code from GitHub

Now you're ready to download the trivia app from GitHub.

### Clone the Repository

Open **PowerShell** and run:

```powershell
cd C:\Users\YourName\Documents
git clone https://github.com/kevinchaddock-sudo/martlet-trivia.git
```

Replace `YourName` with your Windows username.

This downloads all the code to a folder called `martlet-trivia`.

### Navigate to the Folder

```powershell
cd martlet-trivia
```

---

## Step 5: Install Dependencies

The app needs software packages (Express, Socket.io, etc.).

Run:
```powershell
npm install
```

This downloads all packages and takes 1-2 minutes. Wait for it to finish.

---

## Step 6: Run the App Locally

Start the server:
```powershell
npm start
```

You should see:
```
╔════════════════════════════════════════╗
║   🍺 Martlet Trivia Master 🍺         ║
║   Server running on port 3000          ║
╠════════════════════════════════════════╣
║   Host:   http://localhost:3000        ║
║   Player: http://localhost:3000/player ║
╚════════════════════════════════════════╝
```

### Test It

Open your browser:
- **Host page:** http://localhost:3000
- **Player page:** http://localhost:3000/player

Both should load! ✅

### Stop the Server

When done testing, press **Ctrl+C** in PowerShell.

---

## Step 7: (Optional) Use the Cloud Version

Remember, your app is **already running in the cloud** at:
- **Host:** https://martlet-trivia-production.up.railway.app
- **Player:** https://martlet-trivia-production.up.railway.app/player

You can use this from any PC, anywhere, without installing anything! No need for local setup if you just want to run it.

---

## Step 8: (Optional) Edit and Push Changes

If you want to edit the code:

### Edit Files
1. Open VS Code
2. Open the `martlet-trivia` folder
3. Edit files (like `public/index.html`)
4. Save

### Test Locally
```powershell
npm start
# Test at http://localhost:3000
# Press Ctrl+C when done
```

### Push to GitHub
```powershell
git add .
git commit -m "describe your changes"
git push
```

Your changes go live in 1-2 minutes via Railway auto-deploy!

---

## Quick Reference

### First-Time Setup (New PC)
```powershell
# 1. Clone the repo
git clone https://github.com/kevinchaddock-sudo/martlet-trivia.git
cd martlet-trivia

# 2. Install packages
npm install

# 3. Run locally
npm start

# 4. Visit http://localhost:3000
```

### Every Time You Return
```powershell
# 1. Navigate to folder
cd C:\Users\YourName\Documents\martlet-trivia

# 2. Get latest code
git pull

# 3. Run
npm start
```

### To Push Changes
```powershell
git add .
git commit -m "your message"
git push
```

---

## Troubleshooting

**"npm is not recognized"?**
- Node.js didn't install correctly
- Restart your PC and try again
- Or reinstall Node.js

**"git is not recognized"?**
- Git didn't install correctly
- Restart your PC and try again
- Or reinstall Git

**"npm install" fails?**
- Make sure you're in the correct folder: `cd martlet-trivia`
- Check internet connection
- Try again: `npm install`

**"npm start" won't connect?**
- Make sure you're in the `martlet-trivia` folder
- Port 3000 might be in use by another app
- Try: `npm start` then wait 5 seconds

**App doesn't load in browser?**
- Check the PowerShell output — any errors?
- Try http://localhost:3000 (check spelling)
- Hard refresh browser (Ctrl+F5)

---

## Summary

**Minimal setup (just use cloud):**
- No installation needed
- Just visit: https://martlet-trivia-production.up.railway.app

**Full setup (edit code locally):**
1. Install Node.js
2. Install Git
3. Clone from GitHub
4. `npm install`
5. `npm start`
6. Edit, test, push!

That's it! 🍺
