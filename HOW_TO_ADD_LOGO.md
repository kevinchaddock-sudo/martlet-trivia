# How to Add a Logo Image

## Overview

Replace the beer mug emoji (🍺) with your own image (PNG, JPG, or GIF).

---

## Option 1: Local Image (Recommended)

### Step 1: Prepare Your Image

Create a folder for images:
1. Open your project folder: `G:\The Martlet\TriviaMaster-Simple`
2. Create a new folder: `public/images`
3. Save your logo image there as: `logo.png` (or `logo.jpg`)

**Image requirements:**
- Recommended size: 400x400 pixels or square
- Smaller is fine (will be resized anyway)
- Format: PNG, JPG, or GIF

### Step 2: Replace the Emoji in Host Page

**File:** `public/index.html`

Find this line:
```html
<h1>🍺</h1>
```

Replace with:
```html
<img src="/images/logo.png" alt="Martlet Logo" style="width: 80px; height: 80px;">
```

### Step 3: Replace the Emoji in Player Page

**File:** `public/player.html`

Find this line:
```html
<h1>🍺</h1>
```

Replace with:
```html
<img src="/images/logo.png" alt="Martlet Logo" style="width: 80px; height: 80px;">
```

### Step 4: Adjust Size if Needed

Change `width: 80px; height: 80px;` to any size you want:
- Smaller: `width: 60px; height: 60px;`
- Larger: `width: 120px; height: 120px;`

### Step 5: Test Locally

```powershell
cd "G:\The Martlet\TriviaMaster-Simple"
npm start
```

Visit:
- **Host:** http://localhost:3000 → Your logo should appear
- **Player:** http://localhost:3000/player → Your logo should appear

Check:
- ✓ Does the logo display?
- ✓ Is the size right?
- ✓ Does it look good on mobile?

### Step 6: Push to GitHub

```powershell
git add .
git commit -m "Added logo image"
git push
```

### Step 7: Railway Deploys

- Wait 1-2 minutes
- Your Wix site automatically shows the new logo!

---

## Option 2: Image from Internet (Faster)

If you have an image already hosted online (Imgur, your server, etc.), you can use the direct URL instead:

**File:** `public/index.html` and `public/player.html`

Replace:
```html
<h1>🍺</h1>
```

With:
```html
<img src="https://example.com/my-logo.png" alt="Martlet Logo" style="width: 80px; height: 80px;">
```

**Advantages:**
- No need to upload files to your project
- Image is hosted elsewhere

**Disadvantages:**
- If the URL breaks, your logo disappears
- Slightly slower to load

---

## Troubleshooting

**Image doesn't show after testing locally?**
- Make sure the file is saved in the right folder: `public/images/logo.png`
- Check the filename matches exactly (case-sensitive)
- Open browser DevTools (F12) → Console tab → look for error messages

**Image looks blurry or stretched?**
- The image might be too small (less than 80x80 pixels)
- Try a larger image file
- Or reduce the `width` and `height` in the HTML to match your image size

**After pushing to GitHub, image still doesn't show?**
- Wait 2-3 minutes for Railway to finish deploying
- Hard refresh your browser (Ctrl+F5)
- Check Railway dashboard to confirm build finished

---

## File Structure After Adding Image

```
G:\The Martlet\TriviaMaster-Simple\
├── server.js
├── package.json
├── README.md
└── public/
    ├── index.html         (updated with img tag)
    ├── player.html        (updated with img tag)
    └── images/
        └── logo.png       (your new image)
```

---

## Summary

**With local image:**
1. Save image to `public/images/logo.png`
2. Replace emoji with `<img src="/images/logo.png" ...>`
3. Test locally
4. Push to GitHub
5. Done!

**With internet image:**
1. Replace emoji with `<img src="https://your-url.com/logo.png" ...>`
2. Test locally
3. Push to GitHub
4. Done!
