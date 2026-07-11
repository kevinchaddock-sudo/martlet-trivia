# Set Up New GitHub & Railway Accounts for The Martlet

## Overview

This guide covers creating brand new GitHub and Railway accounts specifically for **The Martlet Brewery**, then deploying the trivia app on those accounts.

**Why do this?**
- Keep brewery and personal projects separate
- Multiple team members can access the brewery account
- Professional branding for "The Martlet" projects

---

## Part 1: Create a New GitHub Account

### Step 1: Go to GitHub

1. Open **https://github.com**
2. Click **"Sign up"** (top right)

### Step 2: Create Account

Fill in the form:
- **Email:** Use a brewery email (or create a new Gmail)
  - Example: `themarlet.brewery@gmail.com` or `info@martletbrewery.com`
- **Password:** Strong password (save it somewhere safe!)
- **Username:** Something like `themarlet-brewery` or `martlet-trivia`
- Click **"Create account"**

### Step 3: Verify Email

1. GitHub sends a verification email to your email address
2. Click the link in the email
3. Done! Your new GitHub account is ready ✅

---

## Part 2: Create the Repository

### Step 1: Create New Repository

1. Log into your new GitHub account
2. Click the **"+"** icon (top right)
3. Click **"New repository"**

### Step 2: Set Up Repository

Fill in:
- **Repository name:** `martlet-trivia`
- **Description:** `Play Trivia at The Martlet Brewery`
- Leave everything else as default
- Click **"Create repository"** (green button)

### Step 3: You'll See Instructions

Keep this page open — you'll need the commands!

---

## Part 3: Push Code to New Repository

### Step 1: On Your Current PC

Open PowerShell and navigate to the project:

```powershell
cd "G:\The Martlet\TriviaMaster-Simple"
```

### Step 2: Change the Remote

You need to point your local project to the **new** GitHub repository instead of the old one.

Run this (replace `NEW_USERNAME` with your new GitHub username):

```powershell
git remote set-url origin https://github.com/NEW_USERNAME/martlet-trivia.git
```

Example:
```powershell
git remote set-url origin https://github.com/themarlet-brewery/martlet-trivia.git
```

### Step 3: Push to New Repository

```powershell
git push -u origin master --force
```

It will ask for your username and password:
- **Username:** Your new GitHub username
- **Password:** Your GitHub password (or Personal Access Token if you prefer)

### Step 4: Verify

Go back to your GitHub repository page and refresh — you should see all your files! ✅

---

## Part 4: Create a New Railway Account

### Step 1: Go to Railway

1. Open **https://railway.app**
2. Click **"Start a New Project"** or **"Get Started for Free"**

### Step 2: Sign Up

Choose how to sign up:
- **GitHub** (easiest — use your new GitHub account)
- **Email** (use brewery email)

If GitHub: Click **"Login with GitHub"** and authorize Railway to access your new account

### Step 3: Verify Email (if using Email signup)

Check your email and click the verification link

---

## Part 5: Deploy on Railway

### Step 1: Create New Project

In Railway dashboard, click **"New Project"**

### Step 2: Select GitHub Repository

1. Click **"Deploy from GitHub repo"**
2. Authorize Railway to access your GitHub
3. Select **`martlet-trivia`** from your list

### Step 3: Connect Branch

1. Select branch: **`master`**
2. Click **"Connect"**

Railway will start building automatically!

### Step 4: Wait for Deployment

1. Watch the build log (should take 1-2 minutes)
2. When it shows green checkmark: **"Deployment successful"** ✅

### Step 5: Get Your Public URL

1. Click the **`martlet-trivia`** service (green online button)
2. Go to **Settings** → **Domains**
3. Click **"Generate Domain"**
4. Copy the URL that appears (looks like: `martlet-trivia-production-xxxx.up.railway.app`)

---

## Part 6: Update Wix Site

Now update your Wix site to use the new Railway URL:

1. Log into **wix.com**
2. Edit your martletbrewery.com site
3. Find the embedded trivia page
4. Update the URL from the old Railway app to your new one:
   ```
   https://martlet-trivia-production-xxxx.up.railway.app
   ```
5. **Publish** the changes

---

## Part 7: (Optional) Add Team Members

### GitHub: Add Collaborators

1. In your GitHub repository: **Settings** → **Collaborators**
2. Click **"Add people"**
3. Enter their GitHub username
4. They get an invite to collaborate

### Railway: Add Team Members

1. In Railway: **Settings** → **Members**
2. Click **"Invite member"**
3. Enter their email
4. They get an invite

---

## Quick Checklist

- [ ] Created new GitHub account
- [ ] Created new GitHub repository (`martlet-trivia`)
- [ ] Pushed code from your PC to new repository
- [ ] Verified files appear in GitHub
- [ ] Created new Railway account
- [ ] Connected Railway to GitHub
- [ ] Deployed on Railway (wait for green checkmark)
- [ ] Generated Railway domain URL
- [ ] Updated Wix site with new URL
- [ ] Tested: Visit your Wix site, trivia loads ✅
- [ ] (Optional) Added team members to GitHub and Railway

---

## After Setup: Making Changes

Everything works the same now:

1. **Edit code** on your PC
2. **Test locally:** `npm start`
3. **Push to GitHub:**
   ```powershell
   git add .
   git commit -m "description"
   git push
   ```
4. **Railway auto-deploys** (1-2 minutes)
5. **Wix site is updated** automatically!

---

## Important: Save These URLs

Keep these safe — you'll need them:

- **GitHub:** `https://github.com/NEW_USERNAME/martlet-trivia`
- **Railway Project:** `https://railway.app/project/PROJECT_ID`
- **Live App (Host):** `https://martlet-trivia-production-xxxx.up.railway.app`
- **Live App (Player):** `https://martlet-trivia-production-xxxx.up.railway.app/player`

---

## Troubleshooting

**"Push to GitHub failed"?**
- Make sure you changed the remote correctly
- Use `git remote -v` to check the URL
- Try again: `git push -u origin master --force`

**Railway doesn't see the repository?**
- Make sure you authorized Railway with your new GitHub account
- Refresh the page
- Try creating the project again

**After updating Wix, trivia still shows old version?**
- Wait 2-3 minutes for Railway to finish deploying
- Hard refresh your browser (Ctrl+F5)
- Check that the URL is correct (copy and paste it)

**How to switch back to old account?**
- Set remote back: `git remote set-url origin https://github.com/OLD_USERNAME/martlet-trivia.git`
- Then push: `git push`

---

## Summary

1. **Create GitHub account** for The Martlet
2. **Create repository** on new account
3. **Push existing code** to new repository
4. **Create Railway account** for The Martlet
5. **Connect Railway to GitHub**
6. **Deploy** and get public URL
7. **Update Wix** with new URL
8. **Done!** Now you have a professional setup for The Martlet 🍺

All future changes go through GitHub → Railway → Wix, same as before!
