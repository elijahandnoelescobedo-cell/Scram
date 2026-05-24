# void — Scramjet Web Proxy

A fast, anonymous web proxy powered by Scramjet and Node.js.

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run the proxy
```bash
npm start
```

Open **http://localhost:8080** in your browser.

For auto-restart during development:
```bash
npm run dev
```

---

## File Structure

```
scramjet-proxy/
├── server.js          ← Node.js backend
├── package.json       ← Dependencies & scripts
└── public/
    └── index.html     ← Frontend UI
```

---

## Deploying Online

### Option A — Render (Free, Easiest)
1. Push your project to GitHub
2. Go to https://render.com → New → Web Service
3. Connect your GitHub repo
4. Set:
   - **Build command:** `npm install`
   - **Start command:** `npm start`
   - **Environment:** Node
5. Click Deploy — you'll get a free URL like `https://your-proxy.onrender.com`

> ⚠️ Free Render instances sleep after 15 min of inactivity.

---

### Option B — Railway (Free tier, faster)
1. Push to GitHub
2. Go to https://railway.app → New Project → Deploy from GitHub
3. Select your repo — Railway auto-detects Node.js
4. It sets `npm start` automatically
5. Go to Settings → Networking → Generate Domain

---

### Option C — VPS (DigitalOcean, Hetzner, etc.)
```bash
# On your server:
git clone https://github.com/YOU/scramjet-proxy
cd scramjet-proxy
npm install

# Install PM2 to keep it running
npm install -g pm2
pm2 start server.js --name proxy
pm2 save
pm2 startup
```

Then use Nginx to proxy port 8080 to port 80/443.

---

## Requirements
- Node.js 18+ (`node --version` to check)
- npm 8+

---

## Troubleshooting

**Scramjet not loading?**
```bash
npm install
```

**Port already in use?**
```bash
PORT=3000 npm start
```

**Service worker not registering?**
Make sure you're accessing via `http://` or `https://`, not `file://`.
