# ForexMind AI 🔷
A beginner-friendly Forex trading AI assistant powered by **Groq (FREE — no credit card!)**.

## Requirements
- Node.js (v14 or higher) — download from https://nodejs.org
- A **free** Groq API key — get one at https://console.groq.com

## Setup & Run

### Step 1 — Get your FREE Groq API key
1. Go to https://console.groq.com
2. Sign up (no credit card needed!)
3. Click **"API Keys"** → **"Create API Key"**
4. Copy the key (starts with `gsk_...`)

### Step 2 — Add your API key
Open `server.js` and replace `YOUR_GROQ_API_KEY_HERE`:
```
const API_KEY = 'gsk_xxxxxxxxxxxxxxxx';
```

Or set it as an environment variable:
```bash
# Windows (Command Prompt)
set GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxx

# Windows (PowerShell)
$env:GROQ_API_KEY="gsk_xxxxxxxxxxxxxxxx"

# Mac / Linux
export GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxx
```

### Step 3 — Start the server
```bash
node server.js
```

### Step 4 — Open the app
Go to: http://localhost:3000

## Features
- 💬 AI Chat — Ask anything about forex (powered by LLaMA 3.3 via Groq)
- 📖 Learn Forex — 8 beginner topics explained by AI
- 🛡 Risk Calculator — Position sizing and R:R analysis
- 📊 Live-simulated pair ticker (EUR/USD, GBP/USD, USD/JPY, and more)

## Disclaimer
For educational purposes only. Not financial advice.
