# How to Update the Trivia App

## Quick Overview

Any changes you make go through this workflow:
1. **Edit locally** on your computer
2. **Test locally** to make sure it works
3. **Push to GitHub** to save your changes
4. **Railway auto-deploys** (1-2 minutes)
5. **Your Wix site is updated** automatically!

---

## Step-by-Step: Making Changes

### Step 1: Locate the File to Edit

Open **VS Code** and navigate to your project folder: `G:\The Martlet\TriviaMaster-Simple`

**Where to find text:**
- **Host page text/styling** → `public/index.html`
- **Player page text/styling** → `public/player.html`
- **Game logic** → `server.js`

### Step 2: Make Your Changes

Edit the file directly in VS Code:
- Find the text or code you want to change
- Update it
- **Save the file** (Ctrl+S)

**Example:** Change "Martlet Trivia" to "The Hopsters Trivia"
- Search for "Martlet Trivia" in both HTML files
- Replace with "The Hopsters Trivia"
- Save both files

### Step 3: Test Locally

Open **PowerShell** and run:

```powershell
cd "G:\The Martlet\TriviaMaster-Simple"
npm start
```

Your server starts on `http://localhost:3000`

**Open in browser:**
- **Host page:** http://localhost:3000
- **Player page:** http://localhost:3000/player

**Test your changes:**
- Does the text look right?
- Do buttons work?
- Any errors in the console (F12)?

When done testing, stop the server: **Ctrl+C** in PowerShell

### Step 4: Push to GitHub

Once you're happy with your changes, upload them to GitHub:

```powershell
cd "G:\The Martlet\TriviaMaster-Simple"
git add .
git commit -m "your description here"
git push
```

**What to put in the message:**
- `git commit -m "Changed title to The Hopsters Trivia"`
- `git commit -m "Updated player button colors"`
- `git commit -m "Fixed scoring calculation"`

### Step 5: Railway Auto-Deploys

After you push:
1. Go to **https://railway.app**
2. Click your **martlet-trivia** project
3. You'll see a new build starting (orange progress bar)
4. Wait 1-2 minutes for it to finish (green checkmark)
5. Your app is live!

### Step 6: Verify Live

Your Wix site automatically shows the updated version. Visit `martletbrewery.com` and check your trivia page!

---

## Common Changes

### Change the App Title
**File:** `public/index.html` and `public/player.html`
- Find: `<h2>Martlet Trivia</h2>`
- Change to: `<h2>Your New Title</h2>`
- Save, test, push

### Change Colors
**File:** `public/index.html` or `public/player.html` (in the `<style>` section)
- Find hex colors like `#8B4513` (brown) or `#DAA520` (tan)
- Replace with new color codes
- Save, test, push

### Change Scoring Points
**File:** `server.js`
- Find: `const pointsPerCorrect = 100;`
- Change to: `const pointsPerCorrect = 50;` (or whatever you want)
- Save, test, push

### Change Button Text
**File:** `public/index.html` or `public/player.html`
- Find the button text in HTML
- Change it
- Save, test, push

---

## Troubleshooting

**After pushing, Wix still shows old version?**
- Wait 2-3 minutes for Railway to finish deploying
- Refresh your browser (Ctrl+F5 to hard refresh)
- Check Railway dashboard to confirm deployment finished

**I made a mistake and want to revert?**
- You can push the old version again with `git push`
- Or let us know and we can help undo

**Testing locally shows errors?**
- Open browser DevTools (F12)
- Go to **Console** tab
- Look for red error messages
- Fix the issue, save, and retry

---

## Summary

**Every time you want to update:**
1. Edit the file
2. Test: `npm start` → check `http://localhost:3000`
3. Push: `git add .` → `git commit` → `git push`
4. Wait 1-2 minutes
5. Done!

That's it! Your changes are live on martletbrewery.com 🍺
