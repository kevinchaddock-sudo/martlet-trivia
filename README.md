# 🍺 Martlet Trivia Master - Simple Edition

A lightweight trivia game built for martletbrewery.com with:
- **Host Page**: Enter questions and monitor answers in real-time
- **Player Page**: Teams join and answer questions
- **Real-time Sync**: Live updates via Socket.io
- **Zero External Dependencies**: Just Node.js and npm

---

## 🚀 Quick Start (Local)

### 1. Install Dependencies
```bash
cd "G:\The Martlet\TriviaMaster-Simple"
npm install
```

### 2. Start Server
```bash
npm start
```

Server runs on `http://localhost:3000`

### 3. Open in Browser

**Host:** http://localhost:3000
**Player:** http://localhost:3000/player

### 4. Test It Out

1. Host: Add some questions (e.g., brewery trivia)
2. Host: Click "Start Game"
3. Player (in new tab/window): Enter team name
4. Player: Answer questions as they appear
5. Host: See answers come in live, reveal answers, proceed to next question

---

## 📝 How It Works

### Host Page (`/`)
1. **Add Questions**: Enter question text, 4 options, mark correct answer
2. **Start Game**: Sends all questions to server, game begins
3. **Monitor Answers**: See teams answering in real-time
4. **Reveal Answer**: Show correct answer and calculate scores
5. **Next Question**: Move to next question
6. **End Game**: Show final leaderboard

### Player Page (`/player`)
1. **Join**: Enter team name
2. **Wait**: See "Waiting for host to start game"
3. **Answer**: Select option from 4 choices
4. **Submit**: Click submit
5. **See Result**: Watch if you got it right
6. **Repeat**: Next question appears

---

## 🌐 Deploy to Production

### Option A: Deploy to Railway (Recommended)
1. Sign up: https://railway.app
2. Connect GitHub OR use CLI:
   ```bash
   npm install -g @railway/cli
   railway login
   railway link
   railway up
   ```
3. Get your URL: Railway provides `yourapp.up.railway.app`
4. Add custom domain in Railway settings

### Option B: Deploy to Render.com
1. Sign up: https://render.com
2. Create new Web Service
3. Connect this repo
4. Set start command: `npm start`
5. Get URL automatically

### Option C: Deploy to Heroku (Note: Free tier ending)
```bash
heroku login
heroku create your-app-name
git push heroku main
```

---

## 🔗 Add to Wix

### Method 1: Embed with IFrame
1. Deploy this app (get your URL)
2. In Wix, go to Add → Embed Code
3. Add this code:
```html
<iframe 
  src="https://your-deployed-url.com" 
  style="width:100%; height:800px; border:none; border-radius:10px;">
</iframe>
```

### Method 2: Link from Wix
1. Deploy this app
2. In Wix, add a button/link pointing to your deployed URL
3. Users click and play in new tab

---

## 📊 Features

✅ Multiple teams compete simultaneously
✅ Real-time question display
✅ Live answer tracking (host sees immediately)
✅ Automatic scoring (100 points per correct)
✅ Leaderboard with rankings
✅ Martlet Brewery branding/colors
✅ Mobile-friendly responsive design
✅ No database needed (all in memory)

---

## ⚙️ Configuration

### Port
Default: `3000`

Change in `server.js`:
```javascript
const PORT = process.env.PORT || 3000;
```

### Number of Questions
Max: 50 (no technical limit, but keep reasonable)

### Max Teams
No limit (limited by memory)

---

## 🎨 Customization

### Colors
Martlet brewery colors are already set:
- Brown: `#8B4513`
- Tan: `#DAA520`

Edit in `public/index.html` and `public/player.html` CSS sections

### Branding
Replace "Martlet Trivia Master" with your custom text in HTML files

---

## 🐛 Troubleshooting

**"Cannot find module..."**
```bash
npm install
```

**Port 3000 already in use**
```bash
# Change PORT in server.js or use:
PORT=3001 npm start
```

**Socket.io connection fails**
- Check both client and server are running
- Check firewall allows port
- Check browser console for errors (F12)

**Answers not appearing on host**
- Refresh host page
- Check browser console (F12)
- Verify Socket.io is connected

---

## 📱 Mobile Support

Both pages are fully responsive and work on:
- Desktop browsers
- Tablets
- Phones

Perfect for:
- Brewery trivia nights
- Team building events
- Pub events

---

## 🔐 Security Notes

- This app has NO authentication
- All data is in-memory (lost on server restart)
- NOT suitable for sensitive data
- Good for local/internal brewery use

---

## 📦 Files

```
TriviaMaster-Simple/
├── server.js              # Node.js/Express server
├── package.json           # Dependencies
└── public/
    ├── index.html         # Host dashboard
    └── player.html        # Player page
```

---

## 💡 Tips

1. **Test locally first**: Run `npm start` and test both pages before deploying
2. **Use multiple browsers**: Open Host in Chrome, Player in Firefox to test
3. **Keep questions simple**: 10-15 questions works well for events
4. **Have backup**: Questions are lost on server restart, copy them!

---

## 🚀 Next Steps

1. Run `npm install`
2. Run `npm start`
3. Test at http://localhost:3000
4. Deploy to Railway/Render
5. Add to Wix
6. Host your first trivia night! 🍻

---

## ❓ Questions?

Check the code comments in:
- `server.js` - Backend logic
- `public/index.html` - Host page
- `public/player.html` - Player page

All well-commented for customization!

---

**Enjoy your Martlet Trivia Master!** 🍺
